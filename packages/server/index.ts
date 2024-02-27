import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import WebSocket from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import { makeExecutableSchema } from '@graphql-tools/schema';

import resolvers from './schema/resolvers';
import typeDefs from './schema/typeDefs';
import connectDB from './db';

connectDB();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
const httpServer = createServer(app);
const wsServer = new WebSocket.Server({
  server: httpServer,
  path: '/graphql',
});

const serverCleanup = useServer({ schema }, wsServer);

const apolloServer = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

(async () => {
  await apolloServer.start();
  app.use(
    '*',
    cors(),
    express.json(),
    expressMiddleware(apolloServer)
  );

  const PORT = 4000;
  httpServer.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}/graphql`);
    console.log(
      `🚀 Query endpoint ready at http://localhost:${PORT}/graphql`
    );
    console.log(
      `🚀 Subscription endpoint ready at ws://localhost:${PORT}/graphql`
    );
  });
})();

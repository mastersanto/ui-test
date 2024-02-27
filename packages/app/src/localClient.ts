import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const localHttp = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const localWs = new GraphQLWsLink(createClient({
  url: 'ws://localhost:4000/graphql',
}));

// Use the split function to direct traffic between the two links
const local = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  localWs,
  localHttp
);

// Create the Apollo Client instance
export const localClient = new ApolloClient({
  link: local,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Votes: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming);
            },
          },
        },
      },
    }
  }),
});

export default localClient;
import { PubSub } from 'graphql-subscriptions';
import Celebrity from './db/Celebrity';
/*
interface MessageProps {
  :id: any;
  name: String;
  content: String;
}

let messages: MessageProps[] = [];
*/
const pubsub = new PubSub();

const resolvers = {
  Query: {
    async celebrity(_, { _id }) {
      return await Celebrity.findById(_id);
    },
    async getCelebrities(_, { amount = 10 }) {
      return await Celebrity.find().sort({ dateCreated: -1 }).limit(amount);
    },
  },
  /*
  Mutation: {
    sendMessage: (parent, { params }) => {
      params.id = messages.length;
      var new_message = params;
      messages.push(new_message);
      pubsub.publish("MessageService", {receiveMessage: new_message});
      return new_message;
    },
  },
  Subscription: {
    receiveMessage: {
      subscribe: () => pubsub.asyncIterator(["MessageService"]),
    },
  },
  */
};

export default resolvers;
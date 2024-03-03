import pubsub from '../pubsub';

import Celebrity from '../models/Celebrity';

const resolvers = {
  Query: {
    celebrity: async (parent, args) => {
      const { _id } = args;
      return await Celebrity.findOne({ _id });
    },
    celebrities: async () => {
      return await Celebrity.find();
    }
  },
  Mutation: {
    votePositive: async (parent, args) => {
      const { _id } = args;
      const result = await Celebrity.findByIdAndUpdate(_id, {
        '$inc': { 'votes.positive': 1 },
      });
      pubsub.publish('VOTE_POSITIVE_UPDATED', {
        positiveVotes: {
          _id,
          value: (result?.votes?.positive || 0) + 1
        }
      });
      return result;
    },
    voteNegative: async (parent, args) => {
      const { _id } = args;
      const result = await Celebrity.findByIdAndUpdate(_id, {
        '$inc': { 'votes.negative': 1 },
      });
      pubsub.publish('VOTE_NEGATIVE_UPDATED', {
        negativeVotes: {
          _id,
          value: (result?.votes?.negative || 0) + 1
        }
      });
      return result;
    },
  },
  Subscription: {
    positiveVotes: {
      subscribe: () => pubsub.asyncIterator(['VOTE_POSITIVE_UPDATED']),
    },
    negativeVotes: {
      subscribe: () => pubsub.asyncIterator(['VOTE_NEGATIVE_UPDATED']),
    },
  },
};

export default resolvers;
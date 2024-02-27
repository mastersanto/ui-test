const typeDefs = `
  type Votes {
    positive: Int
    negative: Int
  }
  type Celebrity {
    _id: ID!
    name: String
    description: String
    category: String
    picture: String
    lastUpdated: String
    votes: Votes
  }
  type Query {
    celebrity(_id: ID!): Celebrity
    celebrities: [Celebrity]
  }
  type Mutation {
    votePositive(_id: ID!): Celebrity
    voteNegative(_id: ID!): Celebrity
  }
  type Vote {
    _id: ID!
    value: Int
  }
  type Subscription {
    positiveVotes: Vote
    negativeVotes: Vote
  }
`;

export default typeDefs;
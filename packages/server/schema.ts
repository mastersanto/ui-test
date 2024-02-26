import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Votes {
    positive: String
    negative: String
  }
  type Celebrity {
    _id: String
    description: String
    category: String
    picture: String
    lastUpdated: String
    votes: Votes
  }
  type Query {
    celebrity(_id: ID!): Celebrity!
    getCelebrities(amount: Int): [Celebrity]
  }
`;

export default typeDefs;
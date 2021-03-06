import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    connections: [Connection]
  }
  type Connection {
    id: ID
    Quantity: Int
    ConnectionTypeID: ConnectionType
    CurrentTypeID: CurrentType
    LevelID: Levels
  }

  input ConnectionInput {
    id: ID
    Quantity: Int
    ConnectionTypeID: ID
    CurrentTypeID: ID
    LevelID: ID
  }
`;

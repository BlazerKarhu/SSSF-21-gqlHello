import {gql} from 'apollo-server-express';

export default gql`
  type Connection {
    id: ID
    Quantity: String
    ConnectionTypeID: ConnectionType
    CurrentTypeID: CurrentType
    LevelID: Levels
  }
`;

import {gql} from 'apollo-server-express';

export default gql`
  type Connection {
    id: ID
    Quantity: String
    ConnectionType: ConnectionType
    CurrentType: CurrentType
    LevelType: Levels
  }
`;

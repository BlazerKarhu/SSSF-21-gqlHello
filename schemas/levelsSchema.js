import {gql} from 'apollo-server-express';

export default gql`
  type Levels {
    id: ID
    Title: String
    Comments: String
    IsFastChargeCapable: Boolean
  }
`;

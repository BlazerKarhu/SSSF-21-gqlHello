import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    stations: [Station]
    station(id: ID!): Station
  }

  type Station {
    id: ID
    Title: String
    Town: String
    AddressLinel: String
    StateOrProvince: String
    Postcode: String
    Location: [String]
    Connections: Connection
  }
`;

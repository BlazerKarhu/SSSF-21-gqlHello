import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    stations(bounds: [String], start: Int, limit: Int): [Station]
    station(id: ID!): Station
  }

  type Station {
    id: ID
    Title: String
    Town: String
    AddressLine1: String
    StateOrProvince: String
    Postcode: String
    Location: Location
    Connections: [Connection]
  }
  extend type Mutation {
    addStation(stationName: String!, Connections: [ID!]): Station
    deleteStation(id: ID!): Station
  }
`;

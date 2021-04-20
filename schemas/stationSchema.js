import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    stations(bounds: Bounds, start: Int, limit: Int): [Station]
    station(id: ID!): Station
    addStation: Station
  }

  type Station {
    id: ID
    Title: String
    Town: String
    AddressLine1: String
    StateOrProvince: String
    Postcode: String
    Location: PointObject
    Connections: [Connection]
  }

  input Bounds {
    _southWest: LatLng
    _northEast: LatLng
  }

  input LatLng {
    lat: Float
    lng: Float
  }

  type PointObject {
    coordinates: [Float]
    type: String
  }

  input PointObjectInput {
    coordinates: [Float]
  }

  extend type Mutation {
    addStation(
      Title: String!
      Connections: [ConnectionInput]
      AddressLine1: String
      Town: String
      StateOrProvince: String
      Postcode: String
      Location: [PointObjectInput]
    ): Station
    deleteStation(id: ID!): Station
  }
`;

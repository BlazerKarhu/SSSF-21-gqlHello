import stationSchema from './stationSchema.js';
import connectionSchema from './connectionSchema.js';
import connectionTypeSchema from './connectionTypeSchema.js';
import currentTypeSchema from './currentTypeSchema.js';
import levelsSchema from './levelsSchema.js';

import {gql} from 'apollo-server-express';
import locationSchema from './locationSchema.js';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [
  linkSchema,
  stationSchema,
  connectionSchema,
  connectionTypeSchema,
  currentTypeSchema,
  levelsSchema,
  locationSchema,
];

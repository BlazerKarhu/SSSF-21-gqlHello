import animalSchema from './animalSchema.js';
import categorySchema from './categorySchema.js';
import speciesSchema from './speciesSchema.js';
import {gql} from 'apollo-server-express';
import userSchema from './userSchema.js';
import stationSchema from './stationSchema.js';
import connectionSchema from './connectionSchema.js';
import connectionTypeSchema from './connectionTypeSchema.js';
import currentTypeSchema from './currentTypeSchema.js';
import levelsSchema from './levelsSchema.js';

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
  animalSchema,
  categorySchema,
  speciesSchema,
  userSchema,
  stationSchema,
  connectionSchema,
  connectionTypeSchema,
  currentTypeSchema,
  levelsSchema,
];

import animalSchema from './animalSchema.js';
import categorySchema from './categorySchema.js';
import speciesSchema from './speciesSchema.js';
import {gql} from 'apollo-server-express';
import userSchema from './userSchema.js';

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
];

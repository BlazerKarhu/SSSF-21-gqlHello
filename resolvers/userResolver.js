import {AuthenticationError} from 'apollo-server-errors';
import {login} from '../passport/authenticate.js';
import bcrypt from 'bcrypt';
import User from '../models/user.js';

export default {
  Query: {
    users: async (parent, args, {user}) => {
      return User.find();
    },
    user: async (parent, args, {user}) => {
      console.log('userResolver', user);
      // find user by id
      return User.findById(args.id);
    },
    login: async (parent, args, {req, res}) => {
      // inject username and password to req.body for passport
      req.body = args;
      try {
        const authResponse = await login(req, res);
        return {
          id: authResponse.user.id,
          username: authResponse.user.username,
          token: authResponse.token,
        };
      } catch (error) {
        throw new AuthenticationError('Invalid credentials');
      }
    },
  },
  Mutation: {
    registerUser: async (parent, args) => {
      try {
        const hash = await bcrypt.hash(args.password, 12);
        const userWithHash = {
          ...args,
          password: hash,
        };
        const newUser = new User(userWithHash);
        const result = await newUser.save();
        return result;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

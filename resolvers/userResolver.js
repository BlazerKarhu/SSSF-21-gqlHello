import {AuthenticationError} from 'apollo-server-errors';
import {login} from '../passport/authenticate.js';

export default {
  Query: {
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
};

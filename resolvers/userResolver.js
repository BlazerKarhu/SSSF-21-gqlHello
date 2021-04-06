import {AuthenticationError} from 'apollo-server-errors';

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
        };
      } catch (error) {
        throw new AuthenticationError(error.message);
      }
    },
  },
};

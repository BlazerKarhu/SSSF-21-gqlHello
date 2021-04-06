import {ApolloServer} from 'apollo-server-express';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index.js';
import express from 'express';
import dotenv from 'dotenv';
import connectMongo from './db/db.js';

dotenv.config();

const checkAuth = (req, res) => {
  return new Promise((resolve, reject) => {
    const user = {
      username: 'tester',
    };
    //const user = false;
    resolve(user);
  });
};

(async () => {
  try {
    const conn = await connectMongo();
    if (conn) {
      console.log('Connected successfully.');
    }

    const server = new ApolloServer({
      typeDefs: schemas,
      resolvers,
      context: async ({req, res}) => {
        const user = await checkAuth(req, res);
        console.log('app', user);
        return {
          req,
          res,
          user,
        };
      },
    });

    const app = express();

    server.applyMiddleware({app});

    app.listen({port: 3000}, () =>
      console.log(
        `🚀 Server ready at http://localhost:3000${server.graphqlPath}ql`
      )
    );
  } catch (e) {
    console.log('server error: ' + e.message);
  }
})();

'use strict';
import {ApolloServer} from 'apollo-server-express';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index.js';
import express from 'express';
import dotenv from 'dotenv';
import connectMongo from './db/db.js';
import {checkAuth} from './passport/authenticate.js';
import localhost from './sec/localhost.js';
import production from './sec/production.js';
import helmet from 'helmet';

dotenv.config();

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
    app.use(
      helmet({
        ieNoOpen: false,
      })
    );

    server.applyMiddleware({app});

    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    if (process.env.NODE_ENV === 'production') {
      production(app, 3000);
      console.log(
        `🚀 Server ready at http://localhost:3000${server.graphqlPath}ql`
      );
    } else {
      localhost(app, 8000, 3000);
      console.log(
        `🚀 Server ready at http://localhost:3000${server.graphqlPath}ql`
      );
    }
  } catch (e) {
    console.error('server error: ' + e.message);
  }
})();

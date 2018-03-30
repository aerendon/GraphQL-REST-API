import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
import cors from 'cors';

// import typeDefs from './schemas';
// import resolvers from './resolvers';
import models from './models';

// Merge all Types and Resolvers files
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, './resolvers'))
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
const PORT = 3000;

const app = express();
app.use(
  cors({
    origin: ['http://localhost:3001']
  })
);

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      models
    }
  })
);
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

mongoose.connect('mongodb://localhost:27017/instagram-clone').then(() => {
  console.log('DB Connected');
  app.listen(PORT, () => {
    console.log('Running GRAPHQL server...');
  });
});

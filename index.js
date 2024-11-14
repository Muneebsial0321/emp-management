require('dotenv').config()
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/employee.schema');
const resolvers = require('./resolvers/employee.resolver');
const authenticate = require('./middleware/auth');

const app = express();
app.use(express.json());
// app.use(authenticate);

async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });
  }
  
  startApolloServer();
app.listen(process.env.PORT,()=>console.log(`listen at ${process.env.PORT}`))

module.exports = app;
 
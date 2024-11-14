const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    age: Int!
    class_: String!
    subjects: [String]!
    attendance: Int!
  }

  type Query {
    listEmployees(page: Int, limit: Int, sort: String): [Employee]
    getEmployee(id: ID!): Employee
  }

  type Mutation {
    addEmployee(name: String!, age: Int!, class_: String!, subjects: [String]!, attendance: Int!): Employee
    updateEmployee(id: ID!, name: String, age: Int, class_: String, subjects: [String], attendance: Int): Employee
  }
`;

module.exports = typeDefs;

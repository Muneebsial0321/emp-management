const employees = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const resolvers = {
  Query: {
    listEmployees: (_, { page, limit, sort }) => {
            const sortedEmployees = employees.sort((a, b) => {
                if (a[sort] < b[sort]) return -1;
                if (a[sort] > b[sort]) return 1;
                return 0;
              });
              const startIndex = (page - 1) * limit;
              const endIndex = startIndex + limit;
              const paginatedEmployees = sortedEmployees.slice(startIndex, endIndex);
              return paginatedEmployees;
    },
    getEmployee: (_, { id }) => employees.find(emp => emp.id === id),
  },
  Mutation: {
    addEmployee: (_, { name, age, class_, subjects, attendance }) => {
      const newEmployee = { id: uuidv4(), name, age, class_, subjects, attendance };
      employees.push(newEmployee);
      return newEmployee;
    },
    updateEmployee: (_, { id, ...args }) => {
      const employee = employees.find(emp => emp.id === id);
      Object.assign(employee, args);
      return employee;
    },
  },
};

module.exports = resolvers;

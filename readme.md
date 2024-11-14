# Employee Management GraphQL API

A GraphQL API to manage employee data with fields such as ID, name, age, class, subjects, and attendance. This API includes features like pagination, sorting, and role-based authentication for secure access.

## Features

- **Backend Setup**: Create a GraphQL API to handle employee data.
- **Data Model**: Store employee information with fields:
  - `ID`
  - `name`
  - `age`
  - `class`
  - `subjects`
  - `attendance`
- **GraphQL Schema**:
  - **Queries**:
    - List employees with optional filters.
    - Retrieve details for a single employee.
    - List employees with pagination.
  - **Mutations**:
    - Add new employee data.
    - Update existing employee data.
- **Pagination & Sorting**: Enable pagination and sorting for employee queries.
- **Authentication & Authorization**: Secure API with role-based access:
  - **Admin**: Full access to all features.
  - **Employee**: Limited access to certain features.

## Getting Started

### Prerequisites

- Node.js
- GraphQL
- Database (optional, Not Congfiured yet) (e.g., MongoDB, PostgreSQL)


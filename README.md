# E-commerce Back-End

## Table of Contents

- [Description](#description)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Launch the App](#launch-the-app)
- [Demo Video](#demo-video)
- [Questions](#questions)

## Description

This Node.js application uses an Express.js server and a MySQL database through the sequelize package.

The database contains 4 tables: categories, products, tags, and product_tags. The api queries the 3 main tables, each with 5 endpoints:

- GET all records
  - ex. GET /api/categories response:

```

```

- GET a record by id
- POST a new record
- PUT a record update
- DELETE a record

### Built With

- Node.js
- Express.js
- MySQL
- sequelize, moment.js, & colors packages

## Getting Started

### Installation

Run the following script to install the application:

```
git clone https://github.com/kayleriegerpatton/ecommerce-back-end.git
cd ecommerce-back-end
npm install

```

### Database Setup

Create the ecommerce_db database using the schema.sql file in the terminal or MySQL Workbench:

```
DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;

```

Seed the data:

```
npm run seed
```

### Launch the App

```
npm run start
```

## Demo Video

Click to view the [app demo]().

## Questions

To contribute to or ask a question about this project, please [email](mailto:kayle.patton22@gmail.com) me.

# E-commerce Back-End

## Table of Contents

- [Description](#description)
  - [Endpoints](#endpoints)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
  - [Launch the App](#launch-the-app)
- [Demo Video](#demo-video)
- [Questions](#questions)

## Description

This Node.js application uses an Express.js server and a MySQL database through the sequelize package.

The database contains 4 tables: categories, products, tags, and product_tags. The api queries the 3 main tables, each with 5 endpoints.

### Endpoints

#### `POST /api/{categories|products|tags}`

- creates a new record by type

Post body example (products):

```json
{
  "product_name": "The Beatles Abbey Road, Special Edition CD",
  "price": 25.99,
  "stock": 30,
  "category_id": 3,
  "tagIds": [1, 3]
}
```

Response:

```json
{
  "success": true,
  "data": "Created new product."
}
```

#### `PUT /api/{categories|products|tags}/:id`

- updates a record by id

Post body example (products):

```json
{
  "product_name": "The Beatles Abbey Road CD",
  "price": 13.99,
  "stock": 3,
  "tagIds": [1, 3, 4]
}
```

Response:

```json
{
  "success": true,
  "data": "Created new product."
}
```

#### `DELETE api/{categories|products|tags}/:id`

- deletes a record by id

#### `GET api/{categories|products|tags}`

- returns a list of all records by type

#### `GET /api/{categories|products|tags}/:id`

- each returns a record by id
- ex. `GET /api/categories/2` response:

```json
{
  "success": true,
  "category": {
    "id": 2,
    "category_name": "Shorts",
    "products": [
      {
        "id": 5,
        "product_name": "Cargo Shorts",
        "price": "30",
        "stock": 22,
        "category_id": 2
      },
      {
        "id": 12,
        "product_name": "Biker Shorts",
        "price": "30",
        "stock": 3,
        "category_id": 2
      },
      {
        "id": 13,
        "product_name": "Basketball Shorts",
        "price": "46",
        "stock": 17,
        "category_id": 2
      }
    ]
  }
}
```

### Built With

- Node.js
- Express.js
- MySQL
- sequelize, moment.js & colors packages

## Getting Started

### Installation

Install the application:

```
$ git clone https://github.com/kayleriegerpatton/ecommerce-back-end.git
$ cd ecommerce-back-end
$ npm install
```

### Environment Variables

In the root folder, add an `.env` file following the structure below:

```
DB_NAME=''
DB_USER=''
DB_PASSWORD=''
DB_HOST=''
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

Click to view the [app demo video]().

## Questions

To contribute to or ask a question about this project, please [email me](mailto:kayle.patton22@gmail.com).

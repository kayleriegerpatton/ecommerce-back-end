# E-commerce Back-End

## Table of Contents

- [Description](#description)
  - [Built With](#built-with)
- [Endpoints](#endpoints)
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

### Built With

- Node.js
- Express.js
- MySQL
- sequelize, moment.js & colors packages

## Endpoints

### `POST /api/{categories|products|tags}`

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

Sample response:

```json
{
  "success": true,
  "data": "Created new product."
}
```

### `PUT /api/{categories|products|tags}/:id`

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

Sample response:

```json
{
  "success": true,
  "data": "Updated product to The Beatles Abbey Road CD."
}
```

### `DELETE api/{categories|products|tags}/:id`

- deletes a record by id

Sample response (products):

```json
{
  "success": true,
  "data": "Product with id 15 deleted."
}
```

### `GET api/{categories|products|tags}`

- returns a list of all records by type

Sample response (categories):

```json
{
  "success": true,
  "allCategories": [
    {
      "id": 1,
      "category_name": "Shirts",
      "products": [
        {
          "id": 1,
          "product_name": "Plain T-Shirt",
          "price": "14.99",
          "stock": 14,
          "category_id": 1
        },
        {
          "id": 9,
          "product_name": "V-Neck",
          "price": "14.38",
          "stock": 3,
          "category_id": 1
        }
      ]
    },
    {
      "id": 2,
      "category_name": "Shorts",
      "products": [
        {
          "id": 5,
          "product_name": "Cargo Shorts",
          "price": "29.99",
          "stock": 22,
          "category_id": 2
        },
      ]
    },

```

### `GET /api/{categories|products|tags}/:id`

- returns a record by id

Response (tags):

```json
        {
            "id": 4,
            "tag_name": "red",
            "products": [
                {
                    "id": 3,
                    "product_name": "Branded Baseball Hat",
                    "price": "22.99",
                    "stock": 12,
                    "category_id": 4,
                    "product_tag": {
                        "id": 7,
                        "product_id": 3,
                        "tag_id": 4,
                        "productId": 3,
                        "tagId": 4
                    }
                },
                {
                    "id": 10,
                    "product_name": "Converse High Tops",
                    "price": "70.00",
                    "stock": 25,
                    "category_id": 5,
                    "product_tag": {
                        "id": 19,
                        "product_id": 10,
                        "tag_id": 4,
                        "productId": 10,
                        "tagId": 4
                    }
                }
            ]
        },
```

## Getting Started

### Installation

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
$ npm run seed
```

### Launch the App

```
$ npm run start
```

## Demo Video

Click to view the [app demo video]().

## Questions

To contribute to or ask a question about this project, please [email me](mailto:kayle.patton22@gmail.com).

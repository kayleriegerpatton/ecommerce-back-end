const { Product } = require("../../src/models");

const productData = [
  {
    product_name: "Plain T-Shirt",
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: "Running Sneakers",
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: "Branded Baseball Hat",
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: "Top 40 Music Compilation Vinyl Record",
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: "Cargo Shorts",
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
  {
    product_name: "Fedora",
    price: 30.5,
    stock: 13,
    category_id: 4,
  },
  {
    product_name: "Sun Hat",
    price: 23.49,
    stock: 5,
    category_id: 4,
  },
  {
    product_name: "Henley Shirt",
    price: 39.49,
    stock: 16,
    category_id: 1,
  },
  {
    product_name: "V-Neck",
    price: 14.38,
    stock: 3,
    category_id: 1,
  },
  {
    product_name: "Converse High Tops",
    price: 70.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: "Riding Boots",
    price: 170.0,
    stock: 4,
    category_id: 5,
  },
  {
    product_name: "Biker Shorts",
    price: 29.99,
    stock: 3,
    category_id: 2,
  },
  {
    product_name: "Basketball Shorts",
    price: 45.5,
    stock: 17,
    category_id: 2,
  },
  {
    product_name: "The Beatles Abbey Road Vinyl Record",
    price: 45.99,
    stock: 3,
    category_id: 3,
  },
  {
    product_name: "Laga Gaga Chromatica Album",
    price: 12.35,
    stock: 50,
    category_id: 3,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

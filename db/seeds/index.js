const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedTags = require("./tag-seeds");
const seedProductTags = require("./product-tag-seeds");

const sequelize = require("../../src/config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n".success);

  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n".success);

  await seedProducts();
  console.log("\n----- PRODUCTS SEEDED -----\n".success);

  await seedTags();
  console.log("\n----- TAGS SEEDED -----\n".success);

  await seedProductTags();
  console.log("\n----- PRODUCT TAGS SEEDED -----\n").success;

  process.exit(0);
};

seedAll();

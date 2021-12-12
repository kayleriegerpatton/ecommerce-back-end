require("dotenv").config();
const express = require("express");

const sequelize = require("./config/connection");

const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const init = async () => {
  try {
    // DATABASE CONNECTION FAILING
    // await sequelize.sync({ force: false });
    await sequelize.authenticate();
    console.log("Connected!!");

    // EXPRESS CONNECTION WORKING
    // app.listen(PORT, () =>
    //   console.log(`Server running on http://localhost:${PORT}`)
    // );
  } catch (error) {
    console.log(`[ERROR]: Connection to DB failed - ${error.message}`);
  }
};

init();

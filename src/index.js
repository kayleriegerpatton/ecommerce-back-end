// external imports
require("dotenv").config();
const express = require("express");
const colors = require("colors");

colors.setTheme({
  success: ["bgGreen", "black"],
  warning: ["bgBrightYellow", "black", "bold"],
  fail: ["bgRed", "white", "bold"],
  message: ["bgWhite", "black"],
});

// internal imports
const sequelize = require("./config/connection");
const logger = require("./middlewares/logger");
const routes = require("./routes");

const PORT = process.env.PORT || 3306;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(routes);

// initialize server and database connection
const init = async () => {
  try {
    await sequelize.sync({ force: false });

    // EXPRESS CONNECTION WORKING
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}.`.success)
    );
  } catch (error) {
    console.log(`[ERROR]: Connection to DB failed - ${error.message}`.fail);
  }
};

init();

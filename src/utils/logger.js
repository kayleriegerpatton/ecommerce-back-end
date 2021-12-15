const colors = require("colors");

const logError = (
  type = "Server Error",
  message = "Sorry, something went wrong!"
) => {
  console.log(`[ERROR!]: ${type} | ${message}`.fail);
};

module.exports = logError;

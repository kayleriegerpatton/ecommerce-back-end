const colors = require("colors");

colors.setTheme({
  greeting: ["rainbow"],
  success: ["bgGreen", "black"],
  warning: ["bgBrightYellow", "black", "bold"],
  fail: ["bgRed", "white", "bold"],
  message: ["bgBrightCyan", "black"],
});

const logError = (
  type = "Server Error",
  message = "Sorry, something went wrong!"
) => {
  console.log(`[ERROR!]: ${type} | ${message}`.fail);
};

module.exports = logError;

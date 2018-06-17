if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  // in development mode, return dev keys
  module.exports = require("./dev");
}

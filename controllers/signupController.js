const asyncHandler = require("express-async-handler");

module.exports = {
  signup_get: asyncHandler(async (req, res, next) => {
    res.render("signup");
  }),
};

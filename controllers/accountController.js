const asyncHandler = require("express-async-handler");

module.exports = {
  account_get: asyncHandler(async (req, res, next) => {
    res.render("account", {
      username: "Placeholder Name",
      email: "placeholder@email.com",
      memberStatus: "Not a Member",
      adminStatus: "False",
    });
  }),
};

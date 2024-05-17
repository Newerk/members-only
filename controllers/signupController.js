const asyncHandler = require("express-async-handler");
const Account = require("../models/userCredential");

module.exports = {
  signup_get: asyncHandler(async (req, res, next) => {
    res.render("signup");
  }),

  signup_post: asyncHandler(async (req, res, next) => {
    const newUser = new Account({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: /*generatePassword(hash, */ req.body.password /*, salt)*/,
    });

    await newUser.save();

    res.render("home");
  }),
};

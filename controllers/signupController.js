const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const Account = require("../models/userCredential");

module.exports = {
  signup_get: asyncHandler(async (req, res, next) => {
    res.render("signup");
  }),

  signup_post: asyncHandler(async (req, res, next) => {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      // if err, do something
      // otherwise, store hashedPassword in DB
      const newUser = new Account({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password:
          hashedPassword /*generatePassword(hash, */ /*req.body.password*/ /*, salt)*/,
      });

      await newUser.save();

      res.redirect("login");
    });
  }),
};

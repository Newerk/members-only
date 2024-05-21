const asyncHandler = require("express-async-handler");
const Account = require("../models/userCredential");

module.exports = {
  account_get: asyncHandler(async (req, res, next) => {
    res.render("account", {
      username: "Placeholder Name",
      email: "placeholder@email.com",
      memberStatus: "Not a Member (placeholder)",
      adminStatus: "False (placeholder)",
      updateEmailRedirect: "location.href='/account/email'",
      clubMemberRedirect: "location.href='/account/club'",
      adminStatusRedirect: "location.href='/account/admin'",
      user: req.user,
    });
  }),

  update_email_get: asyncHandler(async (req, res, next) => {
    res.render("email", { user: req.user });
  }),

  club_status_get: asyncHandler(async (req, res, next) => {
    //to get memebership status, search for user in the DB by ID, and then retrieve the club status
    //if isMember === true => "Active Member", else => "Not a Member"
    res.render("joinclub", {
      memberStatus: "Not a Member (placeholder)",
      user: req.user,
    });
  }),

  admin_status_get: asyncHandler(async (req, res, next) => {
    const getUser = await Account.findOne({ username: "admin" }).exec();

    const adminStatus = () => {
      if (getUser.isAdmin === false) {
        return "Not an Admin (placeholder)";
      } else {
        return "Admin Status is Active";
      }
    };

    res.render("admin", {
      getUser: getUser,
      adminStatus: adminStatus(),
      user: req.user,
    });
  }),
};

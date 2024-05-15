const asyncHandler = require("express-async-handler");

module.exports = {
  account_get: asyncHandler(async (req, res, next) => {
    res.render("account", {
      username: "Placeholder Name",
      email: "placeholder@email.com",
      memberStatus: "Not a Member",
      adminStatus: "False",
      updateEmailRedirect: "location.href='/account/email'",
      clubMemberRedirect: "location.href='/account/club'",
      adminStatusRedirect: "location.href='/account/admin'",
    });
  }),

  update_email_get: asyncHandler(async (req, res, next) => {
    res.render("email");
  }),

  club_status_get: asyncHandler(async (req, res, next) => {
    //to get memebership status, search for user in the DB by ID, and then retrieve the club status
    //if isMember === true => "Active Member", else => "Not a Member"
    res.render("joinclub", {
      memberStatus: "Not a Member (placeholder)",
    });
  }),
};

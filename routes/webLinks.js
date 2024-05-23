const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const accountController = require("../controllers/accountController");
const passport = require("passport");
const asyncHandler = require("express-async-handler");
const Account = require("../models/userCredential");
const currentUser = require("../currentUser");

const placeholder = async (req, res, next) => {
  try {
    res.render("placeholder");
  } catch (error) {
    console.log(error);
  }
};

/* GET home page. */
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const sessionUser = await currentUser(req, Account);
    res.render("home", {
      user: req.user,
      sessionUser: sessionUser,
    });
  })
);

router.get("/login", loginController.login_get);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

router.get("/signup", signupController.signup_get);
router.post("/signup", signupController.signup_post);

router.get("/account/", accountController.account_get); //page that shows information such as username, email, and club status and admin status
router.post("/account/", placeholder);

router.get("/account/email", accountController.update_email_get);
router.post("/account/email", placeholder);

router.get("/account/club", accountController.club_status_get);
router.post("/account/club", placeholder);

router.get("/account/admin", accountController.admin_status_get);
router.post("/account/admin", placeholder);

module.exports = router;

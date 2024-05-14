const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const accountController = require("../controllers/accountController");

const placeholder = async (req, res, next) => {
  try {
    res.render("placeholder");
  } catch (error) {
    console.log(error);
  }
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home");
});

router.get("/login", loginController.login_get);
router.post("/login", placeholder);

router.get("/signup", signupController.signup_get);
router.post("/signup", placeholder);

router.get("/account", accountController.account_get); //page that shows information such as username, email, and club status and admin status
router.post("/account", placeholder);

router.get("/account/email", accountController.update_email_get);
router.post("/account/email", placeholder);

router.get("/account/club", accountController.club_status_get);
router.post("/account/club", placeholder);

router.get("/account/admin", placeholder);
router.post("/account/admin", placeholder);

module.exports = router;

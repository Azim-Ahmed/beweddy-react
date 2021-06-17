const express = require("express");
const { requireSignin } = require("../../common-middleware");
const { signup, signin, signout } = require("../../Controllers/admin/auth");
const {
  validateSignupRequest,
  validateSigninRequest,
  isRequestValidate,
} = require("../../validators/auth");
const router = express.Router();

router.post("/admin/signup", validateSignupRequest, isRequestValidate, signup);
router.post("/admin/signin", validateSigninRequest, isRequestValidate, signin);
router.post("/admin/signout", requireSignin, signout);

module.exports = router;

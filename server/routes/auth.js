const express = require("express");
const { signup, signin } = require("../Controllers/auth");
const {
    validateSignupRequest,
    isRequestValidate,
    validateSigninRequest,
} = require("../validators/auth");
const router = express.Router();

router.post("/signin", validateSigninRequest, isRequestValidate, signin);
router.post("/signup", validateSignupRequest, isRequestValidate, signup);

// router.post("/profile", requireSignin, (req, res) => {
//   res.status(200).json({
//     user: "profile",
//   });
// });
module.exports = router;

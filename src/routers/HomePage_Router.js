const passport = require("passport");
const router = require("express").Router();

//Home page url
router.get("/", (req, res) => {
  res.render("HomePage");
});

//url to use oauth
router.get(
  "/loginWithGoogle",
  passport.authenticate("google", { scope: ["profile"] })
);

//Url to get redirect route
router.get("/google/redirect", (req, res) => {
  res.send("Logged in successfully...");
});
module.exports = router;

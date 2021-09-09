const { application } = require("express");
const passport = require("passport");
const googleStratergy = require("passport-google-oauth20");

passport.use(
  new googleStratergy(
    {
      callbackURL: "/google/redirect",
      clientID:
        "11335237590-fdr7gdjq73hi5qa3o5uj0srlbh9vqpnl.apps.googleusercontent.com",
      clientSecret: "h63XTdsy-9hMVti0UlXZJwZ2",
    },
    () => {}
  )
);

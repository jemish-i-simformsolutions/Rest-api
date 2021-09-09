require("dotenv").config();
const express = require("express");
const cookie_parser = require("cookie-parser");
const auth = require("./middleware/auth");
const Book_Router = require("./routers/Book_Router");
const User_Router = require("./routers/User_Roter");
const AuthRoutes = require("./routers/HomePage_Router");
const passportSetup = require("./config/passport-setup");
const app = express();
const port = process.env.PORT || 3030;
require("./db/Connection");

app.set("view engine", "ejs");
app.use(express.json());
app.use(cookie_parser());
app.get("/secretdata", auth, (req, res) => {
  console.log(req.cookies);
  res.send("hello");
});
app.use(Book_Router);
app.use(User_Router);
app.use(AuthRoutes);
app.listen(port, (err) => console.log(err));

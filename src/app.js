require("dotenv").config();
const express = require("express");
const cookie_parser = require("cookie-parser");
const auth = require("./middleware/auth");
const mailer = require("nodemailer");

const transpotter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "italiyajemish99@gmail.com",
    pass: "9825354998",
  },
});

var mailoptions = {
  from: "italiyajemish99@gmail.com",
  to: "italiyajemish1999@gmail.com",
  subject: "hello from surat",
  text: "when you are coming",
};

const port = process.env.PORT || 3030;

require("./db/Connection");

const Book_Router = require("./routers/Book_Router");
const User_Router = require("./routers/User_Roter");

const app = express();

app.get("/sendmail", (req, res) => {
  transpotter.sendMail(mailoptions, (err, info) => {
    err ? res.send(err) : res.send(info);
  });
});
app.use(express.json());

app.use(cookie_parser());

app.get("/secretdata", auth, (req, res) => {
  console.log(req.cookies);
  res.send("hello");
});
app.get("/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (element) => element.token !== req.token
    );

    //or
    //req.user.tokens=[] to logout from all device

    res.clearCookie("jwt");

    console.log(req.user.tokens);
    await req.user.save();
    res.send("successfully logout");
  } catch (e) {
    res.status(400).send(e);
  }
});

app.use(Book_Router);

app.use(User_Router);

app.listen(port, (err) => console.log(err));

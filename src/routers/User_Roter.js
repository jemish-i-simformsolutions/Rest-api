const express = require("express");
const Router = new express.Router();
const userdetail = require("../models/Signup");

Router.post("/registration", async (req, res) => {
  try {
    const UserDetail = new userdetail(req.body);

    const generateToken2 = await UserDetail.generateToken();

    res.cookie("jwt", generateToken2, {
      expires: new Date(Date.now() + 600000),
      httpOnly: true,
    });

    const signupstatus = await UserDetail.save();
    res.status(201).send(signupstatus);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

module.exports = Router;

const jwt = require("jsonwebtoken");
const user = require("../models/Signup");
const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyuser = jwt.verify(token, process.env.SECRET_KEY);
    const finduser = await user.findOne({ _id: verifyuser._id });
    req.token = token;
    req.user = finduser;
    console.log(finduser);
    console.log(verifyuser);
    next();
  } catch (e) {
    console.log(e);
  }
};
module.exports = auth;

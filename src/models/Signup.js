const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const signupschema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  contact_detail: {
    type: Number,
    required: true,
    minlength: 10,
  },
  email_id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
signupschema.methods.generateToken = async function () {
  try {
    const token = await jwt.sign({ _id: this._id }, process.env.SECRET_KEY);

    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

signupschema.pre("save", async function (next) {
  console.log(this.password);
  this.password = await bcrypt.hash(this.password, 10);
  console.log(this.password);
  next();
});
const Registration = new mongoose.model("UserDetail", signupschema);
module.exports = Registration;

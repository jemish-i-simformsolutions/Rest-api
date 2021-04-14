const mongoose = require("mongoose");
const signupschema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  contact_detail: { type: Number, required: true, minlength: 10 },
  email_id: { type: String, required: true, unique: true },
});

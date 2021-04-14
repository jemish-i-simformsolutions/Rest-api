const moongoose = require("mongoose");
const validator = require("validator");
const bookSchema = new moongoose.Schema({
  book_name: {
    type: String,
    required: true,
    minlength: 3,
  },
  book_id: {
    type: String,
    required: true,
    minlength: 3,
    unique: [true, "this bookid is already available"],
  },
  author_name: {
    type: String,
    required: true,
    minlength: 3,
  },
  author_id: {
    type: String,
    required: true,
    minlength: 3,
    unique: [true, "this authorid is already available"],
  },
  book_status: {
    type: Boolean,
    required: true,
  },
});
const Booklist = new moongoose.model("Booklist", bookSchema);

module.exports = Booklist;

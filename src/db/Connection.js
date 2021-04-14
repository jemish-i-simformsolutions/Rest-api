const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Library-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("library created and connected"))
  .catch((err) => {
    console.log(err);
  });

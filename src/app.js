const express = require("express");

const port = process.env.PORT || 3030;

require("./db/Connection");

const Book_Router = require("./routers/Book_Router");

const app = express();

app.use(express.json());

app.use(Book_Router);

app.listen(port, (err) => console.log(err));

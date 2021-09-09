const express = require("express");
const router = new express.Router();
const Booklist = require("../models/Book");

//add book
router.post("/Books", async (req, res) => {
  try {
    const book = new Booklist(req.body);
    const bookadded = await book.save();
    res.status(201).send(bookadded);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});
//get books
router.get("/Books", async (req, res) => {
  try {
    const readBook = await Booklist.find({});
    res.status(200).send(readBook);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get partiular book
router.get("/Books/:id", async (req, res) => {
  try {
    const getbookbyid = await Booklist.findById({ _id: req.params.id });
    res.status(200).send(getbookbyid);
  } catch (e) {
    res.status(400).send(e);
  }
});

//update book
router.patch("/Books/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatebook = await Booklist.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updatebook);
  } catch (e) {
    res.status(404).send(e);
  }
});
//delete book
router.delete("/Books/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deletebook = await Booklist.findByIdAndDelete(_id);
    res.status(200).send(deletebook);
  } catch (e) {
    res.status(404).send(e);
  }
});
module.exports = router;

const express = require("express");

const router = express.Router();
// GET ALL API
router.get("/getAll", (req, res) => {
  res.send("Getting all the data");
});

//GET BY ID API
router.get("/getOne/:id", (req, res) => {
  res.send(`ID:${req.params.id}`);
});

//POST API
router.post("/post", (req, res) => {
  res.send("POST METHOD");
});

//PUT API
router.put("/put", (req, res) => {
  res.send("PUT METHOD");
});

//DELETE API
router.delete("/delete", (req, res) => {
  res.send("DELETE METHOD");
});

module.exports = router;

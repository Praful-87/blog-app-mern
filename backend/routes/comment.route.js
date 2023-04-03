const { Router } = require("express");
const { CommentModel } = require("../models/comments.model");
const { date } = require("../middleware/data");
const comments = Router();

comments.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let result = await CommentModel.find({ blog_id: id }).populate(
      "user_id",
      "-email -password"
    );
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

comments.post("/", async (req, res) => {
  let payload = req.body;
  payload.posted = date;
  try {
    let result = await CommentModel.create(payload);
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err.message);
  }
});
module.exports = { comments };

const { Router } = require("express");
const { BlogsModel } = require("../models/blogs.model");
const cloudinary = require("cloudinary");
const upload = require("../middleware/upload");
const { date } = require("../middleware/data");
const blogs = Router();

require("../middleware/cloudinary");

blogs.get("/", async (req, res) => {
  try {
    let result = await BlogsModel.find().populate(
      "user_id",
      "-password -email"
    );
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ msg: "Something went wrong" });
  }
});
blogs.get("/:_id", async (req, res) => {
  let { _id } = req.params;
  try {
    let result = await BlogsModel.findById({ _id });
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ msg: "Something went wrong" });
  }
});
// CommentModel
blogs.post("/create", upload.single("image_blog"), async (req, res) => {
  let payload = req.body;
  try {
    let { secure_url } = await cloudinary.v2.uploader.upload(req.file.path);
    if (!secure_url)
      secure_url =
        "https://www.thoughtco.com/thmb/XgCUGXTqQ3oRRdsgpItrLXSd97s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Getty_grammar_basics-550382899-57edc0c63df78c690f20836f.jpg";
    payload.image = secure_url;
    payload.posted = date;
    let result = await BlogsModel.create(payload);
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ msg: err.message });
  }
});

blogs.patch("/update/:id", upload.single("image_blog"), async (req, res) => {
  // console.log("update");
  let { id } = req.params;
  let payload = req.body;
  payload.posted = date;
  if (req.file) {
    // console.log("update without file");
    let { secure_url } = await cloudinary.v2.uploader.upload(req.file.path);
    if (!secure_url)
      secure_url =
        "https://www.thoughtco.com/thmb/XgCUGXTqQ3oRRdsgpItrLXSd97s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Getty_grammar_basics-550382899-57edc0c63df78c690f20836f.jpg";
    payload.image = secure_url;
  }
  try {
    let result = await BlogsModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: payload,
      },
      {
        new: true,
        useFindAndModify: true,
      }
    );
    console.log("updated succesfuul");
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ msg: err.message });
  }
});

blogs.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let result = await BlogsModel.findByIdAndDelete(id, {
      new: true,
      useFindAndModify: true,
    });
    res.status(200).send(result);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ msg: "Something went wrong" });
  }
});
module.exports = { blogs };

const mongoose = require("mongoose");

const blogsScema = mongoose.Schema(
  {
    // title: { type: String, required: true },
    blog: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    posted: { type: String },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    versionKey: false,
  }
);

const BlogsModel = mongoose.model("blog", blogsScema);

module.exports = { BlogsModel };

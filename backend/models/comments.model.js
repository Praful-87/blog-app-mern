const mongoose = require("mongoose");

const commentScema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  blog_id: { type: mongoose.Schema.Types.ObjectId, ref: "blog" },
  comment: { type: String },
  posted: { type: String },
},
{
  versionKey: false,
});

const CommentModel = mongoose.model("comment", commentScema);

module.exports = { CommentModel };

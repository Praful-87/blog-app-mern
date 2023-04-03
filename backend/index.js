const express = require("express");
const { connection } = require("./config/db");
const app = express();
const cors = require("cors");
const { user } = require("./routes/user.route");
const { blogs } = require("./routes/blogs.route");
const { comments } = require("./routes/comment.route");
const cloudinary = require("cloudinary");
app.listen(8000, async () => {
  try {
    await connection;
    console.log("connected to db and listening on port 8000");
  } catch (er) {
    console.log("not connected to db");
    console.log(er);
  }
});

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Relatioships");
});


app.use("/user", user);
app.use("/blog", blogs);
app.use("/comment", comments);

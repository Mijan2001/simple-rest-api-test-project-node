const userRouter = require("./routes/user.route");
const cors = require("cors");
const express = require("express");
const app = express();
const multer = require("multer");
require("./config/db");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  .................
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
// ..................

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

app.post("/test", upload.single("image"), (req, res) => {
  res.status(200).send("file is uploaded successfully");
});

app.use("/api/users", userRouter);

app.use((req, res, next) => {
  try {
    res.status(200).json({
      message: "router is ok",
    });
  } catch (error) {
    res.status(404).json({
      message: "router is not found",
    });
  }
});

app.use((err, req, res, next) => {
  try {
    res.status(200).json({
      message: "router is ok",
    });
  } catch (error) {
    res.status(404).json({
      message: "router is not found",
    });
  }
});

module.exports = app;

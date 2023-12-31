const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
let cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")));

const port = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true
})
    .then(console.log("Connected to mongoDb"))
    .catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    }, filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}


app.listen(port, () => {
    console.log("Backend is running", port);
});

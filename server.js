import e from "express";
import express from "express"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static("static_files"));

const port = 3000
app.listen(port, () => {
  console.log(`Server start at port ${port}`);
});
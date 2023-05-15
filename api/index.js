const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const noteRoutes = require("./routes/noteRoutes");
const cors = require("cors");

dotenv.config();
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("Database connected sucessfully"))
  .catch((err) => {
    console.log(err);
  });

app.listen(8800, () => {
  console.log("Server is running");
});

//routes
app.use("/api/notes", noteRoutes);

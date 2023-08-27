const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const morgan = require("morgan");

//router import
const authRoutes = require("./routes/authRoutes");

//env config
dotenv.config();

//mongodb connection
connectDB();

//rest objecct
const app = express();
const port = process.env.port || 5000;
const DEV_MODE = process.env.DEV_MODE || "Development";

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//create a default route
app.get("/", (req, res) => {
  res.send(`Server is working on ${port}`);
});

//listenI
app.listen(port, () => {
  console.log(
    `Server Running on ${DEV_MODE} mode port no ${port}`.bgCyan.white
  );
});

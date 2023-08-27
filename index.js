const express = require("express");
const colors = require("colors");

//rest objecct
const app = express();
const port = process.env.port || 5000;
const DEV_MODE = process.env.port || "Development";

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

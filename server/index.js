//packages
const express = require("express");
require("dotenv").config();

const { PORT } = require("./config/constants");
const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

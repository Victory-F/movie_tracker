//packages
const express = require("express");
require("dotenv").config();

//routers
const movieRouter = require("./routers/movie");

const { PORT } = require("./config/constants");
const app = express();

app.use(express.json());

//routes
app.use("/movies", movieRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

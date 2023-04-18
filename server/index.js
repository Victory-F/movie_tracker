//packages
const express = require("express");
const corsMiddleWare = require("cors");
require("dotenv").config();

//routers
const movieRouter = require("./routers/movie");

const { PORT } = require("./config/constants");
const app = express();

app.use(corsMiddleWare());
app.use(express.json());

//routes
app.use("/movies", movieRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

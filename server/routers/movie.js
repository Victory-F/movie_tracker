const { Router } = require("express");

const Movie = require("../models/").movie;
const Genre = require("../models/").genre;

const router = new Router();

// Get all movies
router.get("/", async (req, res, next) => {
  try {
    // find all movies
    const allMovies = await Movie.findAll({
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
      ],
    });

    // send all vocabularies
    return res.status(200).send(allMovies);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { addFavorite, removeFavorite, getFavorites } = require("../api/favorites");

router.post("/:pokemonName", auth, addFavorite);
router.delete("/:pokemonName", auth, removeFavorite);
router.get("/", auth, getFavorites);

module.exports = router;
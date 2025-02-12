const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getFavorites, addFavorite, removeFavorite } = require("../api/favorites");

router.get("/", authMiddleware, getFavorites);
router.post("/", authMiddleware, addFavorite);
router.delete("/:pokemonName", authMiddleware, removeFavorite);

module.exports = router;
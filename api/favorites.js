const User = require("../models/UserModel");

exports.addFavorite = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const pokemonName = req.params.pokemonName;
        if (!user.favorites.includes(pokemonName)) {
            user.favorites.push(pokemonName);
            await user.save();
        }
        res.json(user.favorites);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

exports.removeFavorite = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        user.favorites = user.favorites.filter(name => name !== req.params.pokemonName);
        await user.save();
        res.json(user.favorites);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

exports.getFavorites = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user.favorites);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};
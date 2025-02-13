const User = require("../models/userModel");

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user); // Отправляем ВСЕ данные пользователя
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};
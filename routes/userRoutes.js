const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getUserProfile } = require("../api/user");

router.get("/", authMiddleware, getUserProfile); // Получить ВСЕ данные пользователя

module.exports = router;
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const passport = require('passport');
require('./config/passport');

const app = express();
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

connectDB();

// Импорт маршрутов
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon API!");
});
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use("/api/favorites", require("./routes/favoriteRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // Экспортируем сервер для Vercel
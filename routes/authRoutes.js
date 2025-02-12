const express = require('express');
const passport = require('passport');
const { googleAuth, googleCallback } = require('../api/auth');

const router = express.Router();

router.get('/google', googleAuth);
router.get('/google/callback', passport.authenticate('google', { session: false }), googleCallback);

module.exports = router;
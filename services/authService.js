const User = require('../models/UserModel');

exports.findOrCreateUser = async (profile) => {
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
        user = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            favorites: [{ type: String }]
        });
    }

    return user;
};
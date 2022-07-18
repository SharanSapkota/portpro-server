
const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const keys = require("./keys");
const User = require("../models/userModel");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
        .catch(e => {
            done(new Error("Failed to deserialize an user", e));
        });
}); 

passport.use(
    new TwitterStrategy(
        {
            consumerKey: keys.TWITTER_CONSUMER_KEY,
            consumerSecret: keys.TWITTER_CONSUMER_SECRET,
            callbackURL: keys.CALLBACKURL
        },
        async (token, tokenSecret, profile, done) => {
            const currentUser = await User.findOne({
                twitterId: profile._json.id_str
            });
            if (!currentUser) {
                const newUser = await new User({
                    name: profile._json.name,
                    screenName: profile._json.screen_name,
                    twitterId: profile._json.id_str,
                    profileImageUrl: profile._json.profile_image_url
                }).save();
                if (newUser) {
                    done(null, newUser);
                }
            }
            done(null, currentUser);
        }
    )
);

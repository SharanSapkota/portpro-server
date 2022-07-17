const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: "test",
    TWITTER_CONSUMER_SECRET: "test",
    TWITTER_ACCESS_TOKEN: "test",
    TWITTER_TOKEN_SECRET: "test"
};

const MONGODB = {
    MONGODB_URI: `mown=majority`
};

const SESSION = {
    COOKIE_KEY: "own"
};

const KEYS = {
    ...TWITTER_TOKENS,
    ...MONGODB,
    ...SESSION
};

module.exports = KEYS;
const router            = require("express").Router();
const passport          = require("passport");
const { 
    authenticate,
    failedLogin,
    logout }            = require("../controllers/authController");

const CLIENT_HOME_PAGE_URL = "http://localhost:3000";

router.get("/login/success", authenticate);

router.get("/login/failed", failedLogin);

router.get("/logout", logout);

router.get("/twitter", passport.authenticate("twitter"));

router.get("/twitter/redirect",
    passport.authenticate("twitter", {
        successRedirect: CLIENT_HOME_PAGE_URL,
        failureRedirect: "/auth/login/failed"
    })
);

module.exports = router;
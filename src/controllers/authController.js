const CLIENT_HOME_PAGE_URL = "http://localhost:3000";


const authenticate = (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "user has successfully authenticated",
            user: req.user,
            cookies: req.cookies
        });
    }
    else {
        res.status(404).json({success: false, message: 'User not found!'});
    }
};

const failedLogin = (req, res) => {
    res.status(401).json({
        success: false,
        message: "user failed to authenticate."
    });
};



const logout = (req, res) => {
    req.logout();
    res.redirect(CLIENT_HOME_PAGE_URL);
};

module.exports = { authenticate, failedLogin, logout };
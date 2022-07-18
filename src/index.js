
const cookieSession     = require("cookie-session");
const express           = require("express");
const app               = express();
const passport          = require("passport");
const passportSetup     = require("./config/passport");
const authRoutes        = require("./routes/authRoutes");
const keys              = require("./config/keys");
const cors              = require("cors");
const cookieParser      = require("cookie-parser");
const connectToMongoDb  = require("./config/db");
const authCheck         = require("./middleware/authCheck");
require('dotenv').config({ path: '../.env' }); 


app.use(
    cookieSession({
        name: "session",
        keys: [keys.COOKIE_KEY],
        maxAge: 24 * 60 * 60 * 100
    })
);

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true 
})
);

app.use("/auth", authRoutes);

app.get("/", authCheck, (req, res) => {
    res.status(200).json({
        authenticated: true,
        message: "user successfully authenticated",
        user: req.user,
        cookies: req.cookies
    });
});

const port = process.env.PORT || 4100;
connectToMongoDb();

app.listen(port, () => console.log(`Server is running on port ${port}!`));
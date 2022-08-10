const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const usersRouter = require("./routes/api/users");
const AdminUser = require("./routes/api/AdminUser");
const config = require('config');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const HomeUser = require ('./routes/api/HomeUser')
const STUDENTNOTES = require('./routes/api/StudentNotes')
const CUSER = require('./routes/api/CreateUser')


// Body parser middleware
app.use(bodyParser.json());
app.use(cors());

app.use(
    express.urlencoded({
        extended: false
    })
);
//route middleware
app.use(HomeUser);
app.use(STUDENTNOTES);
app.use(CUSER);



app.use(express.json());
// DB Config
const db = config.get('mongoURI');
// Connect to MongoDB
mongoose
    .connect(
        db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", usersRouter);
app.use("/api/AdminUser", AdminUser);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
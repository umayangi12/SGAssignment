const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const usersRouter = require("./routes/api/users");
const AdminUser = require("./routes/api/AdminUser");
const config = require("config");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
var http = require("http");
var path = require("path");
var nodemailer = require("nodemailer");

const app = express();
var server = http.Server(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

//Routing
app.get("/", function (req, response) {
  response.sendFile(
    path.join(__dirname, "clientsrcComponentsAdminsendmail.js")
  );
});

app.post("/send_email", function (req, response) {
  var from = req.body.from;
  var to = req.body.to;
  var subject = req.body.subject;
  var message = req.body.message;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "umayangi1999@gmail.com",
      pass: "bdjfamlkfubisbfj",
    },
  });

  var mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent: " + info.response);
    }
    response.redirect("/Sendmail");
  });
});

const HomeUser = require("./routes/api/HomeUser");
const STUDENTNOTES = require("./routes/api/StudentNotes");
const CUSER = require("./routes/api/CreateUser");

// Body parser middleware
app.use(bodyParser.json());
app.use(cors());

app.use(
  express.urlencoded({
    extended: false,
  })
);
//route middleware
app.use(HomeUser);
app.use(STUDENTNOTES);
app.use(CUSER);

app.use(express.json());
// DB Config
const db = config.get("mongoURI");
// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", usersRouter);
app.use("/api/AdminUser", AdminUser);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

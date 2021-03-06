require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("./config/passport");
const Handlebars = require("handlebars");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({
  secret: "pajamas are anytime wear",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

const syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

Handlebars.registerHelper('ifThird', function (index, options) {
  if((index + 1)%3 == 0){
     return options.fn(this);
  } else {
     return options.inverse(this);
  }
});

module.exports = app;
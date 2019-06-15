const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  // Get all inventory
  app.get("/api/inventory", function (req, res) {
    db.Inventory.findAll({}).then(function (dbInventory) {
      res.json(dbInventory);
    });
  });

  // Add a new inventory item
  app.post("/api/inventory", function (req, res) {
    db.Inventory.create(req.body).then(function (dbInventory) {
      res.json(dbInventory);
    });
  });

  app.post("/api/user", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.redirect("/pos");
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.redirect("/pos");
  });

  // Delete an inventory item by id
  app.get("/api/inventory/:id", function (req, res) {
    console.log(req.params.id)
    db.Inventory.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  });
};
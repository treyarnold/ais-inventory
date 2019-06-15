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
    res.redirect("/pos");
  });

  app.get("/api/logout", function(req, res) {
    req.logout();
    res.redirect("/");
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
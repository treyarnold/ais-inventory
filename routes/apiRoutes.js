var db = require("../models");
module.exports = function (app) {
  // Get all drinks
  app.get("/api/drinks", function (req, res) {
    db.drink.findAll({}).then(function (dbdrinks) {
      console.log(dbdrinks);
      res.json(dbdrinks);
    });
  });

  // Add a new inventory item
  app.post("/api/inventory", function (req, res) {
    db.Inventory.create(req.body).then(function (dbInventory) {
      res.json(dbInventory);
    });
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
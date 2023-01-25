const controller = require("../controllers/element.controller.js")
const router = require('express').Router();

module.exports = app => {
    router.post("/create-element", controller.create);
  
    router.get("/", controller.findAll);
  
    router.get("/:id", controller.findOne);
  
    router.put("/plus/:id", controller.plus);

    router.put("/minus/:id", controller.minus);
  
    router.delete("/:id", controller.delete);

    app.use('/api/management/elements', router);
}
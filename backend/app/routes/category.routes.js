const controller = require("../controllers/category.controller.js")
const router = require('express').Router();

module.exports = app => {
    router.post("/create-category", controller.create);
  
    router.get("/", controller.findAll);
  
    router.get("/:id", controller.findOne);
  
    router.put("/:id", controller.update);
  
    router.delete("/:id", controller.delete);

    app.use('/api/management/categories', router);
}
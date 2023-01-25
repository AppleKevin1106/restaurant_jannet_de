const db = require("../models");
const Category = db.category;
const Element = db.element;

//Create and Save a new category
exports.create = (req, res) => {
  console.log(req.body)
    const category = new Category({
      title: req.body.title,
      // elements: req.body.elements
    });
       // Save category in the database
    category
      .save()
      .then(data => {
        res.status(200).send({
          category: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
      console.log("category", category)
};

//Retrieve all categories from the database.
exports.findAll = (req, res) => {
  Category.find()
    .populate("elements")
    .then((data) => {
      res.status(200).send({
        categories: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

//Find a single category with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Category.findById(id)
    .populate("elements")
    .then((data) => {
      if (!data)
        res.status(400).send({ message: "Not found category with id " + id });
      else
        res.status(200).send({
          category: data,
        });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//Update a category by the id in the request
exports.update = (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!req.body) {
      return res.status(400).send({
        message: "Not empty!",
      });
    }
    const id = req.params.id;
    Category.findById(id)
      .then(async (category) => {
        if (!category) {
          res.status(400).send({
            message: `Cannot update category with id=${id}. Maybe category was not found!`,
          });
        } else {
          if (req.body.categorytitle) category.title = req.body.categorytitle;
          let element = await Element.findById(category.title);
          if (!element) element = new Element();
          const _category = await category.save();
          res.status(200).send({ category: _category });
        }
      })
      .catch((err) => {
        res.status(500).send({
          err: err.message,
        });
      });
  });
};

//Delete a category with the specified id in the request

exports.delete = (req, res) => {
  const id = req.params.id;

  Category.findByIdAndRemove(id, { useFindAndModify: false })
    .then(async (data) => {
      if (!data) {
        res.status(400).send({
          message: `Cannot delete category with id=${id}. Maybe category was not found!`,
        });
      } else {
        let element = await Element.findById(data.title);
        await element.remove();

        res.status(200).send({
          message: "category was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

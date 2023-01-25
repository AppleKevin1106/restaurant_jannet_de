const { category } = require("../models");
const db = require("../models");
const Element = db.element;
const Category = db.category;

exports.create = (req, res) => {
  const element = new Element({
    title: req.body?.title,
    description: req.body?.description,
    price: req.body?.price,
    count: req.body?.count,
    category: req.body?.category
  });
  console.log(element)
  element
    .save()
    .then(async (data) => {
      const categoryId = req.body?.category
      const temp = await Category.findById(categoryId)
      if(temp) {
        temp.elements ? temp.elements.push(data) : temp.elements =[]
        await temp.save()
      }
      res.status(200).send({
        element: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
    console.log("element", element)
};

//Retrieve all elements from the database
exports.findAll = (req, res) => {
  Element
    .find()
    .populate("category")
    .then((data) => {
      res.status(200).send({
        elements: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

//Find a single element with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
console.log(id)
  Element.findById(id)
    .populate("category")
    .then((data) => {
      if (!data)
        res.status(400).send({ message: "Not found element with id " + id });
      else
        res.send({
          element: data,
        });
    })
    .catch((err) => {
      res.status(500).send({
        err: err.message,
      });
    });
};

//Update a element by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;
//   Element.findById(id)
//     .then(async (element) => {
//       if (!element) {
//         res.status(400).send({
//           message: `Cannot update element with id=${id}. Maybe element was not found!`,
//         });
//       } else {
//         if (req.body.title) element.title = req.body.title;
//         if (req.body.description) element.description = req.body.description;
//         if (req.body.price) element.price = req.body.price;
//         if (req.body.count) {
//           // if(() => plus__function(index1, index2))
//           // {element.count = req.body.count + 1;}
//           // else(() => minus__function(index1, index2))
//           // {element.count = req.body.count - 1}
//           element.count = req.body.count + 1
//         }
//         if (
//           req.body.category &&
//           element.category?.toString() != req.body.category
//         ) {
//           try {
//             let w = await Category.findByIdAndUpdate(element.category);
//             if (w) {
//               w.elements.pop(element);
//               w.save();
//             }
//             w = await Category.findByIdAndUpdate(req.body.category);
//             if (w) {
//               w.elements.push(element);
//               w.save();
//             }
//           } catch (err) {
//             console.log(err);
//           }
//           element.category = req.body.category;
//         }
//         element
//           .save()
//           .then((data) => {
//             res.status(200).send({ element: data });
//           })
//           .catch((err) =>
//             res.status(500).send({
//               message: err.message,
//             })
//           );
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         err: err.message,
//       });
//     });
// };

exports.plus = (req, res) => {
  const elementId = req.params.id;
  Element.findByIdAndUpdate(elementId, {$inc : {count : 1}},
      function (err, data) {
        if (err){
          console.log(err)
        }
        else{
          console.log("update", data);
        }
    });
};

exports.minus = (req, res) => {
  const elementId = req.params.id;
  Element.findByIdAndUpdate(elementId, {$inc : {count : -1}},
      function (err, data) {
        if (err){
          console.log(err)
        }
        else{
          console.log("update", data);
        }
    });
};
//Delete a element with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Category.findByIdAndRemove(id, { useFindAndModify: false })
    .then(async (element) => {
      if (element) {
        let category = await Category.findById(element.category);
        if (category) {
          category.elements.pop(element);
          category.save();
        }
        res.status(200).send({
          message: "element was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: "No element",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete element with id=" + id,
      });
    });
};

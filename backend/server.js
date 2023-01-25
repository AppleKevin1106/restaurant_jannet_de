let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')
let dbConfig = require('../backend/app/config/db.config')

mongoose.Promise = global.Promise
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log('Database sucessfully connected!')
    },
    (error) => {
      console.log('Could not connect to database : ' + error)
    },
  )

const app = express()
app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }),
// )
app.use(cors())
require("./app/routes/element.routes")(app);
require("./app/routes/category.routes")(app);

// PORT
const port = process.env.PORT || 4001
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
// app.get('/', function (req, res, next) {
//   (function (error) {
//     if (error) {
//       next(error);
//     }
//     else {
//       res.send('No error')
//     }
//   });
// });

app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})

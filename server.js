const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const countiesRouters = require('./routes/counties')
const bodyParser = require('body-parser')
const errorHandler = require('./errorHandler')


const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Connected to MongoDb successfully ");
}).catch(err => console.error(err));

const app = express();
app.use(bodyParser.json())
app.use('/counties', countiesRouters);
app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

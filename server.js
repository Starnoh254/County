const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Connected to MongoDb successfully ");
}).catch(err => console.error(err));

const app = express();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

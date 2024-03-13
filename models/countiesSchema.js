const mongoose = require("mongoose");

const countiesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    countyCode: { type: Number, required: true },
  },
  { timestamps: true },
  { collection: 'counties' }
);

module.exports = mongoose.model("county" , countiesSchema);

const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
        type: String,
        required: true
    },
    datePublished: {
        type: Date
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);


const mongoose = require("mongoose");
const productSchema = require("../schema/product");

const model = mongoose.model("products", productSchema);


module.exports = model;



const mongoose = require("mongoose");
const reviewSchema = require("./review");

var product = new mongoose.Schema({
    color: String,
  category: String,
    productName: String,
    price: Number,
    description: String,
    tag: String,
    productMaterial: String,
    createdAt:String,
    imageUrl:String,
	reviews : [reviewSchema] 
});
    



module.exports = product;
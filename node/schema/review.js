const mongoose = require("mongoose");


var review = new mongoose.Schema({
    rating: Number,
    content:String
});



    



module.exports = review;
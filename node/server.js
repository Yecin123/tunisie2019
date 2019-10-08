const express = require('express');





const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());


//Routers
const routerTest = require("./router/test");
const routerMongo = require("./router/mongo");

const routerImport = require("./router/import");


//app.use("/test", routerTest);
//app.use("/mongo", routerMongo);
var mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.99.101', function(err) {
	if (err) {
		throw err;
	}
});



const product = require("./model/produit");

app.use("/import", routerImport);


app.get("/products", (req, res) => {
	

	product.find({}, function (err, products) {
    
		const data = [];
		products.forEach(function (item) {

			let sum = 0;
			item.reviews.forEach(el => {
				sum = sum + el.rating
			});

			data.push({
				color: item.color,
				category: item.category,
				productName: item.productName,
				price: item.price,
				moyReviews: sum / item.reviews.length,
				imageUrl:item.imageUrl
			});
		});

		res.send(data);
	});
});

app.get("/products/:id", (req, res) => {
	

	product.findOne({_id:req.params.id}, (err, result) => {
		console.log(result);
		res.send(result);
	});
});






app.listen(9000);


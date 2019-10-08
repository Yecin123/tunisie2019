const express = require('express');

const router = express.Router();

const importData = require('../api/imports');

const ProductModel = require('../model/produit');

router.get('/', (req, res) => {
	importData().then((data) => {
		console.log(data);
		
		data.products.forEach((el) => {
			const model = new ProductModel(el);
			model.save((err) => {
				console.log(err);
			});
		});

		res.send('donje');
	});
});

module.exports = router;

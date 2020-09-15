const Product = require('../../db').Product
const urlenc = require('express').urlencoded({extended : true})
const route = require('express').Router()
route.get('/', (req, res)=>{

	Product.findAll()
	.then((products) => {
		res.status(200).send(products)
	})
	.catch((err) => {
		res.status(500).send({
			error : "could not retrieve user"
		})
	})
})

route.post('/',urlenc,(req, res)=>{

	if(isNaN(req.body.price)){
		return res.status(403).send({
			error : "price is not a valid number"
		})
	}

	Product.create({
		name : req.body.name,
		manufacturer: req.body.manufacturer,
		price : parseFloat(req.body.price)
	}).then((product) => {
		res.status(201).send(product)
	}).catch((err) => {
		res.status(501).send({
			error : "could not add new user not created"
		})
	})
})

exports = module.exports = route
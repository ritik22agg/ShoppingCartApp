const User = require('../../db').User
const urlenc = require('express').urlencoded({extended : true})
const route = require('express').Router()
route.get('/', (req, res)=>{

	User.findAll()
	.then((users) => {
		res.status(200).send(users)
	})
	.catch((err) => {
		res.status(500).send({
			error : "could not retrieve user"
		})
	})
})

route.post('/',urlenc,(req, res)=>{

	User.create({
		name : req.body.name
	}).then((user) => {
		res.status(201).send(user)
	}).catch((err) => {
		res.status(501).send({
			error : "could not add new user not created"
		})
	})
})

exports = module.exports = route
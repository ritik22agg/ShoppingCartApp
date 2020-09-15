const Sequelize = require('sequelize');

const db = new Sequelize('shopdb', 'shopper', 'shopass', {
	host : 'localhost',
	dialect: 'mysql'

});

const User = db.define('users', {
	id: {
		type : Sequelize.INTEGER,
		autoIncrement : true,
		primaryKey : true
	},

	name: {
		type : Sequelize.STRING,
		allowNull: false
	}

});

const Product = db.define('products', {
	id : {
		type : Sequelize.INTEGER,
		autoIncrement : true,
		primaryKey : true
	},
	name : {
		type : Sequelize.STRING,
		allowNull: false
	},
	manufacturer : Sequelize.STRING,
	price : {
		type : Sequelize.FLOAT,
		defaultValue : 0.0,
		allowNull : false
	}

});

db.sync()
	.then(() => console.log("Database has been created"))
	.catch((error) => console.error("Database creation failed"))

exports = module.exports = {
	User, Product 
}
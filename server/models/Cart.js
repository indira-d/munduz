const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema(
	{
		userId: {String, required: true},
		products: [
			{
				productId: {type: String},
				quantity: {type: Number, default: 1},
				title: {type: String}

			}
		]
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Cart', CartSchema)
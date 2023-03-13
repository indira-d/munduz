const mongoose = require('mongoose')
import Product from './Product'

const CartSchema = new mongoose.Schema(
	{
		userId: {String, required: true},
		products: [
			{
				product: {type: Product},
				quantity: {type: Number, default: 1},
			}
		],
        username: {type:String},
        phone: {type: String},
        comment: {type: String}
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Cart', CartSchema)
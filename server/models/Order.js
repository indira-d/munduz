const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
	{
		products: [
			{   _id: {type: String},
                name: {type: String},
                size: {type: String },
                color: {type: String},
                price: {type: Number},
                discount: {type: Number},
                quantity: {type: Number},
			},
		],
        username: {type: String},
		phone: {type: String},
		status: {type: String},
        comment: {type: String}
	},
	{timestamps: true}
)

module.exports = mongoose.model('Order', OrderSchema)
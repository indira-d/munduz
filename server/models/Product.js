const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
	{
		name: {type: String, required: [true, 'Добавьте наименование товара']},
		description: {type: String},
		img: {type: String },
		category: {type: String},
		subcategory: {type: String},	
		type: {String},
		size: {type: String },
		color: {type: String},
		price: {type: Number, required: [true, 'Укажите цену товара']},
		discount: {type: Number},
		inStock: {type: Boolean},
		popular: {type: Boolean}
},
{
	timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)

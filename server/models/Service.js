const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema(
{
		name: {type: String, required: [true, 'Добавьте наименование услуги']},
		description: {type: String},
		img: {type: String },
		avatar: {type: String},
		author: {type: String},
		category: {
			_id: {type: String},
			name: {type: String}
		},
		subcategory: {  
			_id: {type: String},
			name: {type: String},
			},
		price: {type: Number, required: [true, 'Укажите цену услуги']},
		discount: {type: Number},
		address: {type: String},
		phone: {type: String},
		popular: {type: Boolean},
		selection: {type: String}
},
{
	timestamps: true
})

module.exports = mongoose.model('Service', ServiceSchema)
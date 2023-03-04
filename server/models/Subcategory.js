const mongoose = require('mongoose')

const SubcategorySchema = new mongoose.Schema({
	subcategory: { type: String, required: true},
	category:{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}

}, {timestamps: true}
)

module.exports = mongoose.model('Subcategory', SubcategorySchema )
const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
{
    name: {type: String, required: true}, 
	subcategories: [
		{
			_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' },
		    name:  String,	
	    }
	],
	selection1: {type: String},
	selection2: {type: String},
	img: {type: String},	
},
{timestamps: true}
)

module.exports = mongoose.model('Category', CategorySchema )
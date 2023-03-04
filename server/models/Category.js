const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
{
    name: {type: String, required: true, unique: true}, 
	subcategories: [
		{
			_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' },
		    name: String
	    }
	],
	img: {type: String},

		
	
},
{timestamps: true}
)

module.exports = mongoose.model('Category', CategorySchema )
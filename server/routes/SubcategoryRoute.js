const express = require('express')
const Subcategory = require('../models/Subcategory')
const router = require('express').Router()
const Category = require('../models/Category')

//CREATE SUBCATEGORY

router.post('/',  async(req, res) => {

	const {categoryId, subcategory} = req.body
	try {
		if(!subcategory){
            res.json({message: 'Добавьте подкатегорию'})
        }
             console.log('req.body',req.body)
			 const newSubcategory = new Subcategory(req.body)
             await newSubcategory.save()

			 console.log('newSubcategory', newSubcategory)

			try {
				await Category.findByIdAndUpdate(categoryId, {
				  $push: {subcategories: {name: newSubcategory.subcategory, _id: newSubcategory._id}}
				})
			} catch (error) {
				console.log(error)
			}
   
			res.status(200).json(newSubcategory)

	} catch (error) {
		res.status(500).json(error)
	}
})


//GET ALL SUBCATEGORIES

router.get('/', async(req, res) => {
	// const newQuery = req.query.new
	// const category = req.query.category

	try {
		let subcategories = await Subcategory.find()
		res.status(200).json(subcategories)
	} catch (error) {
		res.status(500).json(error)
	}
})

module.exports = router
const express = require('express')
const Category = require('../models/Category')
const router = require('express').Router()

const multer = require('multer')

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, './client/public/uploads')
	},
	filename: (req, file, callback) => {
		callback(null, file.originalname)
	}
})

const upload = multer({storage: storage})


//CREATE CATEGORY

router.post('/', upload.single('img'), async(req, res) => {
	const newCategory = new Category({...req.body, img: req.file?.filename})
	try {
		const savedCategory = await newCategory.save()
		res.status(200).json(savedCategory)
	} catch (error) {
		res.status(500).json(error)
	}
})

//GET ALL CATEGORIES

router.get('/', async(req, res) => {

	try {
		let categories = await Category.find()
		res.status(200).json(categories)
	} catch (error) {
		res.status(500).json(error)
	}
})

//DELETE CATEGORY

router.delete ('/:id', async(req, res) => {
	try {
		await Category.findByIdAndDelete(req.params.id)
	} catch (error) {
		res.status(500).json(error)
	}
})


//UPDATE CATEGORY

router.put('/:id', async (req, res) => {
	try {
		const updatedCategory = await Category.findByIdAndUpdate(
			req.params.id,
			{$set: req.body},
			{new: true}
		)
		res.status(200).json(updatedCategory)
	} catch (error) {
		res.status(500).json(error)
	}
})




module.exports = router
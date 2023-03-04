const express = require('express')
const Product = require('../models/Product')
const router = require('express').Router()
const multer = require('multer')

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, './client/public/uploads')
	},
	filename: (req, file, callback) => {
		callback(null, Date.now + file.originalname)
	}
})

const upload = multer({storage: storage})

//CREATE PRODUCT

router.post('/', upload.single('img'), async(req, res) => {

	if(req.file){
		const newProduct = new Product({...req.body, img: req.file.filename})
		try {
			const savedProduct = await newProduct.save()
			res.status(200).json(savedProduct)
		} catch (error) {
			res.status(500).json(error)
		}
	} else {
		const newProduct = new Product(req.body)
		try {
			const savedProduct = await newProduct.save()
			res.status(200).json(savedProduct)
		} catch (error) {
			res.status(500).json(error)
		}
	}	
})

//UPDATE PRODUCT

router.put('/:id', upload.single('img'), async (req, res) => {
	if(req.file){
		try {
			const updatedProduct = await Product.findByIdAndUpdate(
				req.params.id,
				{$set: {...req.body, img: req.file.filename}},
				{new: true}
			)
		res.status(200).json(updatedProduct)
	} catch (error) {
		res.status(500).json(error)
	}
	} else {
		try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{$set: req.body},
			
		)
		res.status(200).json(updatedProduct)
	} catch (error) {
		res.status(500).json(error)
	}}
})






//GET ALL PRODUCTS

router.get('/', async(req, res) => {

	try {
		let products = await Product.find()
		res.status(200).json(products)
	} catch (error) {
		res.status(500).json(error)
	}
})

//DELETE PRODUCT

router.delete ('/:id', async(req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id)
	} catch (error) {
		res.status(500).json(error)
	}
})

//GET ONE PRODUCT
router.get('/:id', async(req, res) => {
	
	try {
		const product = await Product.findById(req.params.id)
		res.status(200).json(product)
	} catch (error) {
		res.status(500).json(err)
	}
})





module.exports = router
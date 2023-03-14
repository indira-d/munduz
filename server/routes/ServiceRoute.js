const express = require('express')
const Service = require('../models/Service')
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

//CREATE SERVICE

router.post('/', upload.single('img'), async(req, res) => {

	if(req.file){
		const newService = new Service({...req.body, img: req.file.filename})
		try {
			const savedService = await newService.save()
			res.status(200).json(savedService)
		} catch (error) {
			res.status(500).json(error)
		}
	} else {
		const newService = new Service(req.body)
		try {
			const savedService = await newService.save()
			res.status(200).json(savedService)
		} catch (error) {
			res.status(500).json(error)
		}
	}	
})

//GET ALL SERVICES

router.get('/', async (req, res) => {
	try {
		let services = await Service.find()
		res.status(200).json(services)
	} catch (error) {
		console.log(error)
	}
})

//DELETE SERVICE

router.delete ('/:id', async(req, res) => {
	try {
		await Service.findByIdAndDelete(req.params.id)
	} catch (error) {
		res.status(500).json(error)
	}
})

//GET ONE SERVICE
router.get('/:id', async(req, res) => {
	try {
		const service = await Service.findById(req.params.id)
		res.status(200).json(service)
	} catch (error) {
		res.status(500).json(error)
	}
})

//UPDATE SERVICE

router.put('/:id', upload.single('img'), async (req, res) => {
	if(req.file){
		try {
			const updatedService = await Service.findByIdAndUpdate(
				req.params.id,
				{$set: {...req.body, img: req.file.filename}},
				{new: true}
			)
		res.status(200).json(updatedService)
	} catch (error) {
		res.status(500).json(error)
	}
} else {
		try {
		const updatedService = await Service.findByIdAndUpdate(
			req.params.id,
			{$set: req.body},
			{new: true}
		)
		res.status(200).json(updatedService)
	} catch (error) {
		res.status(500).json(error)
	}}
})

module.exports = router

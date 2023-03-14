const express = require('express')
const Order = require('../models/Order')
const router = require('express').Router()


//CREATE ORDER
router.post('/',  async(req, res) => {
	const newOrder = new Order(req.body)
	try {
		const savedOrder = await newOrder.save()
		res.status(200).json(savedOrder)
	} catch (error) {
		res.status(500).json(error)
	}
})

//GET ALL ORDERS
router.get('/', async(req, res) => {
	try {
		let orders = await Order.find()
		res.status(200).json(orders)
	} catch (error) {
		res.status(500).json(error)
	}
})

//GET ONE ORDER
router.get('/:id', async(req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE ORDER
router.delete ('/:id', async(req, res) => {
	try {
		await Order.findByIdAndDelete(req.params.id)
	} catch (error) {
		res.status(500).json(error)
	}
})


//UPDATE ORDER
router.put('/:id',  async (req, res) => {
    try {
        console.log('req.body', req.body)
		const updatedOrder = await Order.findByIdAndUpdate(

			req.params.id,
			{$set: req.body},
			{new: true}
		)
			res.status(200).json(updatedOrder)
		} catch (error) {
			res.status(500).json(error)
		}
})


module.exports = router
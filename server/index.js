const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
mongoose.set("strictQuery", false);
const productRoute = require('./routes/ProductRoute')
const categoryRoute = require('./routes/CategoryRoute')
const subcategoryRoute = require('./routes/SubcategoryRoute')
const serviceRoute = require('./routes/ServiceRoute')


const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("DB connection is successful"))
	.catch(err => console.log('err'))

app.use("/products", productRoute)
app.use("/categories", categoryRoute)
app.use("/subcategories", subcategoryRoute)
app.use("/services", serviceRoute)

app.listen(process.env.PORT , () => {
	console.log(`Server is running on port ${process.env.PORT}`)
})
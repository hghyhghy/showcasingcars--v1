
const express = require('express')
const router = express.Router()

// creating routes for when user visits any page 
// creating for home route

const {getallproducts,getallproductstesting} = require("../controllers/products")

router.route("/").get(getallproducts)
router.route("/testing").get(getallproductstesting)

module.exports = router
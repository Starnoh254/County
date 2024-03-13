const asyncHandler = require('express-async-handler')
const express = require('express')
const router = express.Router()
const getCounties = require('../routeHandlers/counties')

router.get('/', getCounties)

module.exports = router
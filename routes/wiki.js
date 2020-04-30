const express = require('express')
const router = express.Router();
const models = require('../models')
const addPage = require('../views/addPage')

router.get('/', async (req, res, next) => {
    res.send('got to GET /wiki/')
})

router.get('/add', async (req, res, next) => {
    res.send(addPage())
})

router.post('/', async (req, res, next) => {
    res.send('post route')
})

// router.use(req, res, next, err) {
//   console.log(err)
// }

module.exports = router;

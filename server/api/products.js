const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  res.send('ALL PRODUCTS ARE HEREEEEEE')
})

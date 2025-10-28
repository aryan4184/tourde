const router = require('express').Router()
const {register} = require('../controllers/authController')


router.post('/register',register)
router.post('/login')


module.exports = router

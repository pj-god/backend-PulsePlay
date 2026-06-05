const express = require('express')
const authController = require('../controllers/auth.controller')
const {registerValidator, loginValidator} = require('../validators/user.validator')
const validate = require('../middlewares/user.middleware')

const router = express.Router()

router.post('/register', registerValidator, validate , authController.registerUser)
router.post('/login', loginValidator, validate , authController.loginUser)
router.post('/logout', authController.logoutUser)

module.exports = router
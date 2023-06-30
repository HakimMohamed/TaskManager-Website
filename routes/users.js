const express = require('express')
const router = express.Router()

const {
  getAllUsers,
  loginUser,
  signUpUser,
} = require('../controllers/users')

router.route('/').get(getAllUsers)
router.route('/login').post(loginUser)
router.route('/signUp').post(signUpUser)



module.exports = router

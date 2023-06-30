const bcrypt = require('bcrypt')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const { SECRET = "secret" } = process.env;

const getAllUsers = async(req, res) => {
    const result = await User.find();
    res.status(200).json({ result })
}


 const signUpUser = asyncWrapper (async (req, res) => {
  
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = { name: req.body.name, password: hashedPassword }
    
    await User.create(user)
    
    res.status(201).send()
})

const loginUser = ( async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });

    if (user) {

      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        const token = await jwt.sign({ name: user.name }, SECRET);
        res.json({ token });
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }

    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }

  } catch (error) {
    res.status(400).json({ error });
  }
 
})

module.exports = {
    getAllUsers,
    loginUser,
    signUpUser,
}
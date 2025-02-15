const userController = require('../controllers/userController')
const express = require('express')
const router = express.Router();

router.get('/users',userController.getAllUsers)
router.post('/createUser',userController.createUser)
router.delete('/users/:id', userController.deleteUser)
router.put('/users/:id', userController.updateUser)
router.get('/users/:id', userController.getUsersById)

module.exports = router
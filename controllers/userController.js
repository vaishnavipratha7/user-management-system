const User = require('../models/userModels')

exports.getAllUsers = async (req, res)=>{
    try {
        let users = await User.find()
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
}

//create new users
exports.createUser = async (req,res)=>{
    try {
        const user = new User(req.body)
        await user.save();
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

//delete a user
exports.deleteUser = async (req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send('user not found')
        }
        
    } catch (error) {
        res.status(500).send(error)
    }
}

//update a user
exports.updateUser = async (req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        if(!user){
            return res.status(404).send('user not found')
    }} catch (error) {
        res.status(500).send(error)
    }
}

exports.getUsersById = async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).send('user not found')
    }
    } catch (error) {
        res.status(500).send(error)
    }
}

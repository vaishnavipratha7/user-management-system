const mongoose = require('mongoose')
const userSchema=mongoose.Schema(
    {
        age:Number,
        name:
        {
            type:String,
            required: true
        }
    }
)
const user = mongoose.model('users',userSchema)
module.exports = user
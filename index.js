const express = require('express')
const mongoose = require('mongoose')
//const userRouter = require('./routes/userRoutes')
const userRouter = require('./routes/userRoutes')
const cors = require('cors')
const app = express()
const PORT = 9000

app.use(
    cors({
        origin: 'http://localhost:3000'
    })
)

mongoose.connect("mongodb://localhost:27017/demo")
.then(()=>{
    console.log(`connected to database`)
}).catch((err)=>{
    console.log(`error connecting to the database`+ err.message)
})

app.use(express.json())
app.use(userRouter)

app.listen(PORT,()=>{
    console.log(`your app is being served on ${PORT}`)
})
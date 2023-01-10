const express =require('express')
const connectDB = require('./config/db')
const {check, validationResult }= require('express-validator/check')
const app= express()

//connect to database
connectDB()

//initialize middleware
app.use(express.json({extended: false}))

app.get('/',(req,res)=> res.send('API RUNNING'))

app.use('/api/users',require('./routes/api/users'))

const PORT =process.env.PORT||5000

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))



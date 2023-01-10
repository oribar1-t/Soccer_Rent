const express = require ('express')
const router = express.Router()
const {check, validationResult }= require('express-validator/check')


router.post('/',[
    check('name','name is required').not().isEmpty(),
    check('email','please include valid email').isEmail(),
    check('password','please include valid password').isLength({min:6})
],(req,res)=> {

    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }

    console.log(req.body)
    res.send('User route')})

module.exports= router
const express=require('express')
const router=express.Router();


router.get('/users',(req,res)=>{
    render('login')
})
module.exports=router
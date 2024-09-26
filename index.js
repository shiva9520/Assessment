const express = require('express')
const app = express()
const PORT=3000
const common=require('./helper/common')
const route=require('./routes/login')
const staticroute=require('./routes/login')
const path = require('path') 
const connectToMongodb=require('./connect')

app.use('/',route) 
common.createAdmin()
connectToMongodb()
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`server is running on ${PORT}`);
    }
})
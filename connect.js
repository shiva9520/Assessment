const mongoose=require('mongoose')

const connectToMongodb=async ()=>{
    try {
        let connect=await mongoose.connect('mongodb://localhost:27017/Users')
        console.log('connection created...');        
    } catch (error) {
        console.log(error);        
    }
}

module.exports=connectToMongodb;
const Users = require('../models/Users')
const bcrypt = require('bcrypt')
const saltRound=10

const createAdmin= async()=>{
        try {
            let password=bcrypt.hashSync('123345',saltRound)
            let userSchema ={
                firstName:'Admin',
                email:'admin@rdec.in',
                password:password,
                usertype:1
            }

            let user=new Users(userSchema);
            await user.save()
            console.log('Admin has been created successfully');
            
        } catch (err) {
            console.log(err);            
        }
}

module.exports={
    createAdmin
}
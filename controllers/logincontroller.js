const Users = require('../models/Users')
const bcrypt = require('bcrypt')
const saltRound = 10;
const addUser = async (req, res) => {
    try {
        console.log(req.body);
        let hashedPassword=bcrypt.hashSync(req.body.password,saltRound)
        let user = await new Users(req.body);
        user.password=hashedPassword
        await user.save()
        console.log(user);
        console.log('added sucessfully');
        res.render('login')
    } catch (err) {
        console.log("error : ", err);
    }
}
const getUsers = async (req, res) => {
    try { 
        let users = await Users.find({})
        res.render('entrydetails', {
            users: users
        }) 
    } catch (err) {
        console.log("error : ", err);
    }
}

const login = async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        console.log("error : ", err);
    }
}
const loginUser = async (req, res) => {
    try {
        let email = req.body.email
        let pwd = req.body.password
        let user = await Users.findOne({ email: email })
        if(!user){
            res.send("<h1>User not found</h1>")
        }
        else {
            const isMatch=await bcrypt.compare(pwd,user.password)
            if (isMatch) {
                res.render('welcome')
            } else {
                res.end("<h1>Wrong Password</h1>")
            }
        } 
    } catch (err) {
        console.log("error : ", err);
    }
}
const register = async (req, res) => {
    try {
        res.render('registeration')
    } catch (err) {
        console.log("error : ", err);
    }
}

module.exports = {
    addUser,
    getUsers,
    loginUser,
    login,
    register
}
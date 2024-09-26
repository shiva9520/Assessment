const mongoose = require('mongoose');
const timestamps=require('mongoose-timestamps')
const userSchema = new mongoose.Schema({
    rollno: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    usertype: { type: Number, default: 2, enum: [1, 2] },
    aadharCardNo: { type: String },
    mobileNo: { type: String },
    createdAt:Date,
    updatedAt:Date
});

userSchema.plugin(timestamps,{index:true})
module.exports = mongoose.model('Users', userSchema);

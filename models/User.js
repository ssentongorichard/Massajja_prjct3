const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
datetoday:{
    type:Date,
    required: true,
    trim: true
},
names: {
    type:String,
    required: true
},
dateofbirth:{
    type:Date,
    required: true
}
ward: {
    type:String,
    required: true
},
gender: {
    type:String,
    required: true
},

activity: {
    type:String,
    required: true
},
residence: {
    type:String,
    required: true
},
foid: {
    type:String,
    required: true
},
nid: {
    type:String,
    required: true
},
phone: {
    type:String,
    required: true
},
yearsofstay: {
    type:number,
    required: true,
    trim: true
},
address: {
    type:String,
    required: true
},
})
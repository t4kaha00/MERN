const mongoose = require('mongoose')

const DataTemplate = new mongoose.Schema({
    clickedData:{
        type:Boolean,
        required:true
    },
    ipaddress:{
        type:String,
        required:true
    },
    ipcountry:{
        type:String,
        required:true
    },
    ipcity:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('CLickedDataTable', DataTemplate)
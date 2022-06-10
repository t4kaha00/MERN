const mongoose = require('mongoose')

const DataTemplate = new mongoose.Schema({
    ip:{
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
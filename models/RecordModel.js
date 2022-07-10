const mongoose = require('mongoose')

const DataTemplate = new mongoose.Schema({
    clickedData:{
        type:Boolean,
        required:true
    },
    ipdata:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('CLickedDataTable', DataTemplate)
const mongoose = require('mongoose')

const DataTemplate = new mongoose.Schema({
    clickedData:{
        type:Boolean,
        required:true
    },
    ipaddress:{
        type:String,
    },
    ipcountry:{
        type:String,
    },
    ipcity:{
        type:String,
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
const express = require('express')
// const fs = require('fs')
const DataTemplateCopy = require('../models/RecordModel')

const router = express.Router()

router.post('/submit', (request, response) =>{
    console.log(request.body);
    const clickedData = new DataTemplateCopy({
        clickedData:    request.body.clickedData,
        ipaddress:      request.body.ipaddress,
        ipcity:         request.body.ipcity,
        ipcountry:      request.body.ipcountry
   })
   clickedData.save((error) => {
    if (error) {
        response.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
    }
    return response.json({
        msg: 'Your data has been saved!!!!!!'
    });
   })
})

router.get('/', (request, response) => {
    DataTemplateCopy.find({})
                    .then((data) => {
                        response.json(data),
                        console.log(data.length + " addresses found")})
                    .catch((error) => {console.log(error)})
})

module.exports = router
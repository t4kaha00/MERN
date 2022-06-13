const express = require('express')
// const fs = require('fs')
const DataTemplateCopy = require('../models/RecordModel')

const router = express.Router()

router.post('/submit', (request, response) =>{
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

router.get('/:id', (req, res) => {
    const { id } = req.params;
    DataTemplateCopy.findById(id)
                    .then(data => res.json(data))
                    .catch((error) => {console.log(error)})
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    DataTemplateCopy.findByIdAndDelete(id)
                    .then(data => res.json(data))
                    .catch((error) => {console.log(error)})
})

module.exports = router
const express = require('express')
const fs = require('fs')
// const DataTemplateCopy = require('../models/RecordModel')

const router = express.Router()
const ipdata = JSON.parse(fs.readFileSync(`${__dirname}/../data/db.json`))

router.post('/submit', (request, response) =>{
    const sampleData = {
         "ip": request.body.ip,
         "ipcity": request.body.ipcity,
         "ipcountry": request.body.ipcountry
    }
    
    const fileData = JSON.parse(fs.readFileSync(`${__dirname}/../data/db.json`))
    fileData.push(sampleData)
    fs.writeFileSync(`${__dirname}/../data/db.json`, JSON.stringify(fileData, null, 2), (data,err) => {
        if (err) {
            response.json(err)
        }
    })
    response.json(fileData)
})

router.get('/', (req, res) => {
    res.send(ipdata)
    // DataTemplateCopy.find({}).then((data) => {response.json(data), console.log(data.length + " addresses found")}).catch(( error) => {console.log(error)})
})

module.exports = router
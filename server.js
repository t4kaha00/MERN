const express = require('express')
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080;

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"))

app.use(express.json())
app.use(cors())

// In production mode, use build folder for staic web for faster loading
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname + "/../build")));
}

app.use('/app', routes)
const server = app.listen(PORT, () => {
    console.log('Server running on ', server.address().port);
})
// app.listen(PORT, () => console.log(`Server is starting at ${PORT}`));

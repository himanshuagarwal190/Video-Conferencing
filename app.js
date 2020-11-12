const express = require('express')
const socket = require('socket.io')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
var port = process.env.port || 3000

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/room', (req, res) => {
    res.render('room')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
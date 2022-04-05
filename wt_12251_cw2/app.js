let express = require('express')
let path = require('path')
let app = express()
let PORT = process.env.PORT || 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/blog.html'))
})

app.get('/blog-single', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/blog-single.html'))
})

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/menu.html'))
})
app.get('/reservation', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/reservation.html'))
})

app.listen(PORT)
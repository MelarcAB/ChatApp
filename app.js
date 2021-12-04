const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const path = require("path");

const ejs = require("ejs");

const app = express();
const port = 9999

app.set('views', __dirname + '')
app.set('view engine', 'ejs')


const server = http.createServer(app)
const io = require('socket.io')(server);
io.listen(server)

io.on('connection', socket => {
    console.log("Usuario conectado")
})

app.use(express.static(__dirname + '/public'));




app.get('/', function(req, res) {
    res.render('public/index.ejs', {});
});



server.listen(port, () => {
    console.log('server started on port ' + port)

})
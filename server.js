const {getBookingCode} = require('./puppeteer')

const express = require ('express')
const path = require('path')
const bodyParser = require('body-parser')

const PORT = 3000 || process.env.PORT

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))



app.get('/', (req, res)=> {
    res.sendFile('./public/index.html')
})

app.post('/', (req, res)=>{
    const data = req.body
    const bookiefrom = data.bookiefrom
    const bookieto = data.bookieto
    const bookingCode = data.bookingCode

    if (bookiefrom === bookieto){
        console.log('error');
        // do something in ui
    }else{
        console.log('initiating pup function')
        getBookingCode(bookiefrom, bookieto, bookingCode)
    }
})

app.listen(PORT, ()=>{
    console.log('app started on', PORT)
})
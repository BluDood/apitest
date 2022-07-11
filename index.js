const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('request')
    res.send(new Date(Date.now()))
})

app.listen(process.env.PORT, () => {
    console.log('started')
})
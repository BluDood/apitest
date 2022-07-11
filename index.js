const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('request')
    res.send('Hello World!')
})

app.listen(8080, () => {
    console.log('started')
})
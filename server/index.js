const express = require('express')
const cors = require('cors')
const api = require('./api')
const app = express()
const port = 3001

app.use(cors())
app.use('/api', api)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
const logger = require('./logger')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
logger.info('Info logg')
logger.error('Error logging starts!!!!')
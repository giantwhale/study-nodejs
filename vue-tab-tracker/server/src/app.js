const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')  // cross-set
const morgan = require('morgan')  // debug
const {sequelize} = require('./models')

const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app);

sequelize.sync()
  .then(() => {
    
    app.listen(config.port)
    console.log(`server started on port ${config.port}`)
  })

module.exports.app = app

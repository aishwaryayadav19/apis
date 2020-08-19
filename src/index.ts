'use strict'

import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import v1apis from './apis/v1'

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())

app.use('/api/v1', v1apis)

server.listen(8484, '0.0.0.0', () => {
  console.log('server is up')
})

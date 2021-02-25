const express = require('express')
const app = express()
const port = 3000
const routers = require('./routes')
app.use(express.urlencoded({ extended: true }))


app.set("view engine","ejs")
app.use(routers)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
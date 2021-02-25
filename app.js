const express = require('express')
const app = express()
const port = 3000
const routers = require('./routes')
const session = require('express-session')
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs");

app.set("view engine","ejs")

app.use(session({
  secret: 'fadhil',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(routers)

app.use(routers);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
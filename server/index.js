const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000    


const app = express();

app.use(express.json());


app.use("/api",require("./routers/authRoutes.js"))

app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.listen(port, () => console.log(`Server started on port http://localhost:${port}`))
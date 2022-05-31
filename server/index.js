const express = require('express');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const dotenv = require('dotenv').config()
const apiRouters = require('./routers');

const port = process.env.PORT || 5000    


const app = express();

app.use(express.json());


app.use("/api",apiRouters)

app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.use(notFound)
app.use(errorHandler)

  app.listen(port, () => console.log(`Server started on port http://localhost:${port}`))
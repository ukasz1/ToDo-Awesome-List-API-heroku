require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');

const app = express();

//database
const connectDB = require('./db/connect')


app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());

//routers
const eventRouter = require('./routes/events')

//routes

app.get('/', (req, res) => {
  res.send('<h1>ToDo Awesome List API</h1><a href="https://github.com/ukasz1/ToDo-Awesome-List">Link do aplikacji</a>')
})
app.use('/api/v1/events', eventRouter)

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start();

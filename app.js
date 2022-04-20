require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

//routers
const eventRouter = require('./routes/events')

//routes

app.get('/', (req, res) => {
  res.send('<h1>ToDo Awesome List API</h1><a href="https://github.com/ukasz1/ToDo-Awesome-List">Link do aplikacji</a>')
})
app.use('/api/v1/events', eventRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`))
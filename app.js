require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/api', (req, res, next) => {
  res.status(200).json([
    {
      id: 1,
      task: 'Praca',
      description: 'Raport dla Roberta',
      date: {
        day: '31',
        month: '05',
        year: '2022'
      },
      time: {
        hour: '13',
        minute: '00'
      }
    },
    {
      id: 2,
      task: 'Nauka',
      description: 'Sprawozdanie z fizyki',
      date: {
        day: '15',
        month: '06',
        year: '2022'
      },
      time: {
        hour: '08',
        minute: '00'
      }
    },
    {
      id: 3,
      task: 'Nauka',
      description: 'Korepetycje z chemii',
      date: {
        day: '20',
        month: '07',
        year: '2022'
      },
      time: {
        hour: '11',
        minute: '00'
      }
    }
  ])
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`))
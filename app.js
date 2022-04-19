require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`))
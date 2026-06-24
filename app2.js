
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;




app.get('/', (req, res) => {
  res.send('Hello Docker Compose1 Node + MongoDB');
});


app.listen(port, () => {
  console.log(`✅ Server running: http://localhost:${port}`);
});


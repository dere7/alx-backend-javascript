const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.end(`Payment methods for cart ${req.params.id}`);
});

app.listen(7865, () => console.log('API available on localhost port 7865'));

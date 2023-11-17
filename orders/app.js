const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello from the Microservice!');
});

app.listen(port, () => {
  console.log(`Microservice listening on port ${port}`);
});

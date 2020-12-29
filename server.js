const express = require('express');
const app = express();

app.use(express.static('content'));

app.get('/healthz', (req, res) => {
  res.send('Healthy!').end();
});

app.get('*', (req, res) => {
  res.status(404).sendFile('index.html');
});

app.listen(8080, () => console.log('App listening on port 8080'));

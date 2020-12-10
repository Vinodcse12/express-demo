const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world adasdaad');
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('/api/post/:year/:month', (req, res) => {
  res.send(req.params);
});

app.get('/api/post/:year/:month/:day', (req, res) => {
  res.send(req.query);
});

const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log('Server is ready to use......')
})
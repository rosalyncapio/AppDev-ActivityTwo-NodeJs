const express = require('express');
const path = require('path');
const app =express();
const port = 3 000;
const body_parse = require('body-parser')

app.use(express.static(path.join(__dirname, 'views')));
app.use(body_parse.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views','index.html'));
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views','logIn.html'));
})

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views','register.html'));
})
 
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Form submitted! Name: ${name}, Email: ${email}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
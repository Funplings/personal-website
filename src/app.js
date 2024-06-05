const express = require('express')
const path = require('path');
const app = express()
const port = 3000

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'));
})

app.get('/games', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/games.html'))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
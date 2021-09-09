
const express = require('express')
const app = express()

const port = process.env.PORT || 8080;

// serve the public directory as a static content here


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
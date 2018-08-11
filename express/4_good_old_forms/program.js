const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));

app.post('/form', (req, res) => {
  const str = req.body.str
    .split('')
    .reverse()
    .join('');
  res.send(str);
});

const PORT = process.argv[2];
app.listen(PORT);

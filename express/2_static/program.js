const path = require('path');
const express = require('express');
const app = express();

const PORT = process.argv[2];
const INDEX_PATH = process.argv[3];
const DEFAULT_PATH = path.join(__dirname, 'public');

app.use(express.static(INDEX_PATH || DEFAULT_PATH));
app.listen(PORT);

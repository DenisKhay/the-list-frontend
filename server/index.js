const express = require('express');
const app = express();
const port = 4000;

app.use(express.static(__dirname + '/../build'));

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
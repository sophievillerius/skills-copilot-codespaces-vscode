// Create web server
const express = require('express');
const app = express();
// Create web server
app.get('/comments', (req, res) => {
  const comments = [
    { name: 'A', message: 'Hello' },
    { name: 'B', message: 'Hi' },
    { name: 'C', message: 'Hey' },
  ];
  res.send(comments);
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
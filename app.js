const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const db = require('./queries');

app.get('/', (req, res) => {
  res.send('Heyyyy');
});

app.get('/actors', db.getActors);
app.get('/rentals', db.getRental);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
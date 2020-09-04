const newrelic = require('newrelic');
const express = require('express')
const app = express()
const port = 3003

const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/1');
})
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);


app.listen(port, () => console.log(`Listening on port ${port}!`))
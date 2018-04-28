const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors'); 
const logger     = require('morgan');

const db         = require('./models');
const routes     = require('./routes');

const app        = express();

app.use(logger('combined'));
app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

// errors
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ error: err.errors || err.message });
});

module.exports = app;
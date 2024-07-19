require('dotenv').config();
const Sentry = require("@sentry/node");
require('./config/sentry-config');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

Sentry.setupExpressErrorHandler(app);

// Доп обработка ошибок
app.use(function onError(err, req, res, next) {
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

module.exports = app;

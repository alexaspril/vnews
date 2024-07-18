require('./config/sentry-config');
const express = require('express');
const Sentry = require('@sentry/node');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

Sentry.setupExpressErrorHandler(app);

// Доп обработка ошибок
app.use(function onError(err, req, res, next) {
  // Идентификатор ошибки прикрепляется к `res.sentry`, чтобы его можно было вернуть
  // и при необходимости отобразить пользователю для поддержки.
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

module.exports = app;

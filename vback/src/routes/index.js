const express = require('express');
const router = express.Router();
const newsRoutes = require('./newsRoutes');

router.use('/showcase', newsRoutes);

module.exports = router;
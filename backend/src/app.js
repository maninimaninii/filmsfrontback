const express = require('express');
const app = express();
const cors = require('cors');
const filmRoutes = require('./routes/filmRoutes');



app.use(express.json());
app.use('/api', filmRoutes);

module.exports = app;
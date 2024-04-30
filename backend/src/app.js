const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const filmRoutes = require('./routes/filmRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());

app.use(session({
  secret: 'many', 
  resave: false,
  saveUninitialized: false
}));

app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });



  








app.use('/api', filmRoutes);
app.use('/api',userRoutes);

module.exports = app;
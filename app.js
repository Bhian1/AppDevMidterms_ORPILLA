const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const app = express();
const port = 4000;

// for the middleware
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};


app.use(bodyParser.json());
app.use(requestLogger);

// for the routes
app.use('/user', userRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
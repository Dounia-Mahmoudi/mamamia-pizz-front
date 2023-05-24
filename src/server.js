const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./Express/db/sequelize');
const apiRouter = require('./routes/api');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));

// Connect to the database
sequelize.authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Set up routes
app.use('/api', apiRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

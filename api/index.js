const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config();

const URI_DB = process.env.DB_HOST;
const connection = mongoose.connect(URI_DB);

connection
  .then(() => {
    console.log('Database connected successfully!');

    app.listen(3000, () => {
      console.log('Server is running.');
      console.log('Use our API on port: http://localhost:3000');
    });
  })
  .catch(error => {
    console.log(`Something gone wrong with connection with DB. Error:${error.message}`);
    process.exit(1);
  });

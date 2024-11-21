const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT;
const URI_DB = process.env.MONGO_URI;
const connection = mongoose.connect(URI_DB);

connection
  .then(() => {
    console.log('Database connected successfully!');

    app.listen(PORT, () => {
      console.log('Server is running.');
      console.log(`Use our API on port: http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.log(`Something gone wrong with connection with DB. Error:${error.message}`);
    process.exit(1);
  });

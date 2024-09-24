const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const authRouter = require('../routes/api/auth.js');
const userRouter = require('../routes/api/user');
const transactionRouter = require('../routes/api/transaction');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

require('../config/passportJWT.js');

app.get('/', async (req, res) => {
  res.send({ message: 'Hello! Everything is working.' });
});
app.get('/favicon.ico', (req, res) => {
  res.status(204).end(); // Odpowiedz "No Content" i zakończ
});

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/transaction', transactionRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;

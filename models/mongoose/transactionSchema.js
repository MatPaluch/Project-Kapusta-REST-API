const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    amount: { type: Number, required: true },
    category: {
      type: String,
      enum: [
        'alcohol',
        'entertainment',
        'health',
        'transport',
        'housing',
        'technique',
        'communal, communication',
        'sports, hobbies',
        'education',
        'other',
        'Salary',
        'Add. income',
      ],
      required: true,
    },
    description: { type: String },
    type: { type: String, enum: ['expense', 'income'], required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;

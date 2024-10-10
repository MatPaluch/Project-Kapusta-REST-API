const User = require('../../../models/mongoose/userSchema');
const Transaction = require('../../../models/mongoose/transactionSchema');

const getUserData = async (req, res, next) => {
  try {
    const user = req.user;

    const transactions = await Transaction.find({ userId: user._id }).sort({ date: -1 });

    const formattedTransactions = transactions.map(transaction => ({
      _id: transaction._id,
      description: transaction.description,
      category: transaction.category,
      amount: Math.abs(transaction.amount),
      date: transaction.date.toLocaleDateString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    }));

    const response = {
      avatarURL: user.avatarURL,
      email: user.email,
      balance: user.balance,
      isBalanceSet: user.isBalanceSet,
      transactions: formattedTransactions,
    };

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = getUserData;

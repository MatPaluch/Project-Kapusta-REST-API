const Transaction = require('../../../models/mongoose/transactionSchema');
const User = require('../../../models/mongoose/userSchema');

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findById(id);

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    await Transaction.findByIdAndDelete(id);

    const user = await User.findById(transaction.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.balance += Math.abs(transaction.amount);
    await user.save();

    return res
      .status(200)
      .json({ message: 'Transaction deleted and balance updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = deleteTransaction;

const updateBalance = async (req, res, next) => {
  try {
    const { balance } = req.body;
    const user = req.user;

    if (balance === undefined || typeof balance !== 'number') {
      return res.status(400).json({
        status: 'Error',
        code: 400,
        message: 'Balance is required and should be a valid number',
      });
    }

    user.balance = balance;
    user.isBalanceSet = true;
    await user.save();

    return res.status(200).json({
      status: 'Success',
      code: 200,
      message: 'Balance updated successfully',
      balance: user.balance,
      isBalanceSet: user.isBalanceSet,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateBalance;

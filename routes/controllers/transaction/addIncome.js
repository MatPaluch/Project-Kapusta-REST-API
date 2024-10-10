const Transaction = require('../../../models/mongoose/transactionSchema');

const addIncome = async (req, res, next) => {
  try {
    const { amount, category, description, date } = req.body;
    const user = req.user;

    const incomeCategories = ['Salary', 'Other income'];

    if (!amount || amount <= 0) {
      return next({ status: 400, message: 'Amount is required and should be a positive number.' });
    }

    if (!category || !incomeCategories.includes(category)) {
      return next({
        status: 400,
        message: `Invalid category provided. Valid categories are: ${incomeCategories.join(', ')}`,
      });
    }

    // Rozdziel datę na dzień, miesiąc i rok
    const dateParts = date ? date.split('.') : [];
    if (dateParts.length !== 3) {
      return next({ status: 400, message: 'Invalid date format. Please use dd.MM.yyyy.' });
    }

    const day = Number(dateParts[0]);
    const month = Number(dateParts[1]) - 1; // Zmniejszamy o 1
    const year = Number(dateParts[2]);

    const transactionDate = new Date(year, month, day);

    // Sprawdź, czy data jest ważna
    if (isNaN(transactionDate.getTime())) {
      return next({
        status: 400,
        message: 'Invalid or missing date. Please provide a valid date in dd.MM.yyyy format.',
      });
    }

    const newIncome = new Transaction({
      userId: user._id,
      amount: Math.abs(amount),
      category,
      description,
      type: 'income',
      date: transactionDate,
    });

    await newIncome.save();
    user.balance += Math.abs(amount);
    await user.save();

    const response = {
      newBalance: user.balance,
      transaction: {
        _id: newIncome._id,
        description: newIncome.description,
        amount: Math.abs(newIncome.amount),
        date: transactionDate.toLocaleDateString('pl-PL', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }),
        category: newIncome.category,
      },
    };

    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = addIncome;

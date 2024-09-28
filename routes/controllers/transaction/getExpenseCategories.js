const getExpenseCategories = async (req, res, next) => {
  try {
    const expenseCategories = [
      'Products',
      'Alcohol',
      'Entertainment',
      'Health',
      'Transport',
      'Housing',
      'Technique',
      'Communal, Communication',
      'Sports, Hobbies',
      'Education',
      'Other',
    ];

    return res.status(200).json({
      status: 'Success',
      code: 200,
      expenseCategories,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getExpenseCategories;

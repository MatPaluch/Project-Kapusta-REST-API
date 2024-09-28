const getIncomeCategories = async (req, res, next) => {
  try {
    const incomeCategories = ['Salary', 'Other income'];

    return res.status(200).json({
      status: 'Success',
      code: 200,
      incomeCategories,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getIncomeCategories;

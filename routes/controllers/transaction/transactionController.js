const Transaction = require('../../../models/mongoose/Transaction');

const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findByIdAndDelete(id);

        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        return res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

const getMonthlyExpenses = async (req, res) => {
    try {
        const currentYear = new Date().getFullYear();
        const expenses = await Transaction.aggregate([
            {
                $match: {
                    type: 'expense',
                    date: {
                        $gte: new Date(`${currentYear}-01-01`),
                        $lt: new Date(`${currentYear + 1}-01-01`)
                    }
                }
            },
            {
                $group: {
                    _id: { $month: '$date' },
                    totalExpenses: { $sum: '$amount' }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]);

        return res.status(200).json({ data: expenses });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { deleteTransaction, getMonthlyExpenses };

const Transaction = require('../'); 

const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findByIdAndDelete(id);

        if (!transaction) {
            return res.status(404).json({ message: 'Transakcja nie została znaleziona' });
        }

        return res.status(200).json({ message: 'Transakcja została usunięta' });
    } catch (error) {
        return res.status(500).json({ message: 'Błąd serwera', error });
    }
};

module.exports = { deleteTransaction };

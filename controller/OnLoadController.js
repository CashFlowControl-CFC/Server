

const { Transaction } = require("../db/index");
const { Category } = require("../db/index");
const db = require("../db");
class OnLoadController {
    async getCategories(req, res) {
        const result = await Category.findAll();
        if (result.length > 0) {
            return result;
        } else {
            return ("Haven't categories");
        }
    }
    async getCategoryByID(category_id) {
        const result = await Category.findAll({
            where: {
                id: category_id,
            },
        });

        if (result.length > 0) {
            return result;
        } else {
            return ("Haven't category with ID " + category_id);
        }
    }

    async TransactionByUserID(user_id) {
        const result = await Transaction.findAll({
            where: {
                user_id: user_id,
            },
        });

        if (result.length > 0) {
            return result;
        } else {
            return ("User with id: " + user_id + " haven't any transaction");
        }
    }

    async combineTransactions(req, res) {
        try {
            const { user_id } = req.params;

            if (!user_id) {
                throw new Error('User ID is missing');
            }

            const transactions = await this.TransactionByUserID(user_id);

            if (!transactions) {
                throw new Error('Transactions not found');
            }

            const categories = await this.getCategories(req, res);

            if (!categories) {
                throw new Error('Categories not found');
            }

            const combinedTransactions = [];

            for (const transaction of transactions) {
                for (const category of categories) {
                    if (transaction.category_id === category.id) {
                        const formattedDate = this.formatDate(transaction.date);
                        combinedTransactions.push({
                            'x': category.name,
                            'y': transaction.cash,
                            'fill': category.color,
                            'id': transaction.id,
                            'image': category.image_link,
                            'isIncome': transaction.isIncome,
                            'date': formattedDate,
                        });
                    }
                }
            }

            res.status(200).send(combinedTransactions);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toISOString().slice(0, 10);
    }

}

module.exports = new OnLoadController();

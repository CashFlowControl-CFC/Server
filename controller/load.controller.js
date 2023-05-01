const db = require("../db")
const CategoryController = require('./category.controller')
const TransactionController = require('./transaction.controller')
const FormattedDate = require('../module/FormattedDate')
class LoadController {

    async combineTransactions(req, res) {
        try {
            const { user_id } = req.params

            if (!user_id) {
                throw new Error('User ID is missing')
            }

            const transactions = await TransactionController.getTransactionByUserID(req,res,true)

            if (!transactions) {
                throw new Error('Transactions not found')
            }

            const categories = await CategoryController.getCategories(req,res,true)
            console.log(categories);
            if (!categories) {
                throw new Error('Categories not found')
            }

            const combinedTransactions = []

            for (const transaction of transactions) {
                for (const category of categories) {
                    if (transaction.category_id === category.id) {
                        const formattedDate = FormattedDate.formatDate(transaction.date)
                        combinedTransactions.push({
                            'x': category.name,
                            'y': transaction.cash,
                            'fill': category.color,
                            'id': transaction.id,
                            'comment':transaction.comment,
                            'image': category.image_link,
                            'isIncome': transaction.isIncome,
                            'date': formattedDate,
                            'category_id':category.id
                        })
                    }
                }
            }

            res.status(200).send(combinedTransactions)
        } catch (e) {
            res.status(400).send(e.message)
        }
    }

    

}

module.exports = new LoadController()

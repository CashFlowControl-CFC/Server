const express = require('express')
const router = express.Router()
const transactionController = require('../controller/transaction.controller')


router.get('/',transactionController.getTransactions)
router.get('/user/:user_id', transactionController.getTransactionByUserID)
router.get("/:transaction_id",transactionController.getTransactionByID)
router.post('/', transactionController.addTransaction)
router.delete('/:transaction_id',transactionController.deleteTransactionByID)
router.patch('/:transaction_id',transactionController.patchTransactionByID)


module.exports = router
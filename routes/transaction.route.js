const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transaction.controller');

router.get('/',transactionController.getTransactions);
router.post('/create', transactionController.addTransaction);
router.delete('/delete/:transaction_id',transactionController.deleteTransactionByID);
router.patch('/update/:transaction_id',transactionController.patchTransactionByID);
router.get('/:user_id', transactionController.getTransactionByUserID);

module.exports = router;
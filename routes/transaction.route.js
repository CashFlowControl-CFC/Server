const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transaction.controller');

router.post('/create', (req,res)=>{
    transactionController.addTransaction(req,res);
    console.log('post')
});
router.get('/',(req,res)=>{
    transactionController.getTransactions(req,res);
})
router.get('/:id', (req,res)=>{
    transactionController.getTransactionByUserID(req,res,req.params.id)
});


module.exports = router;
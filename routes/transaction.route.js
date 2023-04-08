const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transaction.controller');

router.post('/create', (req,res)=>{
    transactionController.addTransaction(req,res);
    console.log('post')
});
router.delete('/delete/:transaction_id',(req,res)=>{
    transactionController.deleteTransactionByID(req,res,req.params.transaction_id);
})
router.patch('/update/:transaction_id',(req,res)=>{
    transactionController.patchTransactionByID(req,res,req.params.transaction_id)
})
router.get('/',(req,res)=>{
    transactionController.getTransactions(req,res);
})
router.get('/:user_id', (req,res)=>{
    transactionController.getTransactionByUserID(req,res,req.params.user_id)
});



module.exports = router;
const express = require('express');
const router = express.Router();
const transactionController = require('../controller/transaction.controller');


router.get('/',(req,res)=>{

    console.log('Get all users');
})
router.post('/create', (req,res)=>{
    console.log('post')
});
module.exports = router;
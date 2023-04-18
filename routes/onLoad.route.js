const express = require('express');
const router = express.Router();
const onloadController = require('../controller/OnLoadController');

router.get('/:user_id',async(req,res)=>{
    await onloadController.combineTransactions(req,res);
});


module.exports = router;
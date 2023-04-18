const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{

    console.log('Get all users');
})
router.post('/create', (req,res)=>{
    console.log('post')
});
module.exports = router;
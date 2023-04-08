const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const db = require('./db');
const Transactionroutes = require('./routes/transaction.route');

app.use(bodyParser.json());
app.use('/transaction',Transactionroutes);

app.listen(PORT,()=>{
    db.sequelize;
    console.log("Started on "+PORT);
})
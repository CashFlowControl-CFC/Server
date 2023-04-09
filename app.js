const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const db = require('./db');

const TransactionRoute = require('./routes/transaction.route');
const CategoryRoute = require('./routes/category.route');

app.use(bodyParser.json());

app.use('/transaction',TransactionRoute);
app.use('/category',CategoryRoute);

app.listen(PORT,()=>{
    db.sequelize;
    console.log("Started on "+PORT);
})
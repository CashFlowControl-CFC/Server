const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const db = require('./db');
const TransactionRoute = require('./routes/transaction.route');
const CategoryRoute = require('./routes/category.route');
const LoadRoute = require('./routes/onLoad.route');
const AccountRoute = require('./routes/account.route');
const UserRoute = require('./routes/user.route')
const RemainderRoute = require('./routes/remainder.route')
const GoalRoute = require('./routes/goal.route')
app.use(bodyParser.json());
app.use(cors());

app.use('/transaction',TransactionRoute);
app.use('/category',CategoryRoute);
app.use('/load',LoadRoute);
app.use('/account',AccountRoute);
app.use('/user',UserRoute)
app.use('/remainder',RemainderRoute)
app.use('/goal',GoalRoute)

app.listen(PORT,()=>{
    db.sequelize;
    console.log("Started on "+PORT);
})
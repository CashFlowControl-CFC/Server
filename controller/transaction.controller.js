const {Transaction} = require('../db/index');

class TransactionController {
    async addTransaction(req,res){
        const {category_id,user_id,date,comment,cash,isIncome} = req.body;
        await Transaction.create({
            category_id:category_id,
            user_id:user_id,
            date:date,
            comment:comment,
            cash:cash,
            isIncome:isIncome
        }).then(result=>{
            return res.status(200).send(result);
        }).catch(err=>{
           return res.status(400).send(err);
        });
    }
    async getTransactions(req,res){
        await Transaction.findAll().then(result=>{
            return res.status(200).send(result);
        }).catch(err=>{
            return res.status(400).send(err);
        })
    }
    async getTransactionByUserID(req, res, id) {
        console.log(id);
        await Transaction.findAll({
          where: {
            user_id: id
          }
        })
        .then(result => {
          if(result.length > 0) {
            return res.status(200).send(result);
          } else {
            return res.status(400).send('User with id: '+id+" haven't any transaction");
          }
        })
        .catch(err => {
          return res.status(400).send(err);
        })
      }
}
module.exports = new TransactionController();
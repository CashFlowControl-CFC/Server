const { Transaction } = require("../db/index");
const db = require("../db");
class TransactionController {
  async getTransactions(req, res) {
    await Transaction.findAll()
      .then((result) => {
        return res.status(200).send(result);
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  }
  async addTransaction(req, res) {
    const { category_id, user_id, date, comment, cash, isIncome } = req.body;
    try {
      const result = await Transaction.create({
        category_id: category_id,
        user_id: user_id,
        date: date,
        comment: comment,
        cash: cash,
        isIncome: isIncome,
      });
      return res.status(200).send(result);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  async deleteTransactionByID(req, res) {
    await Transaction.destroy({
      where: {
        id: req.params.transaction_id,
      },
    })
      .then((result) => {
        if (result === 0) {
          return res
            .status(400)
            .send("Transaction with id " + req.params.transaction_id + " not found.");
        }
        return res
          .status(200)
          .send(
            "Transaction with id " +
            req.params.transaction_id +
              " was deleted successfully."
          );
      })
      .catch((err) => {
        return res.status(400).send(err.message);
      });
  }
  async patchTransactionByID(req, res) {
    await Transaction.findOne({
      where: {
        id: req.params.transaction_id,
      },
    })
      .then((result) => {
        if (result === 0) {
          return res
            .status(400)
            .send("Transaction with id " + req.params.transaction_id + " not found.");
        } else {
          const { category_id, user_id, date, comment, cash, isIncome } =
            req.body;
          console.log("comment: " + comment + "\nid: " + req.params.transaction_id);
          Transaction.update(
            {
              category_id: category_id ?? db.sequelize.literal("category_id"),
              user_id: user_id ?? db.sequelize.literal("user_id"),
              date: date ?? db.sequelize.literal("date"),
              comment: comment ?? db.sequelize.literal("comment"),
              cash: cash ?? db.sequelize.literal("cash"),
              isIncome: isIncome ?? db.sequelize.literal("isIncome"),
            },
            {
              where: {
                id: req.params.transaction_id,
              },
            }
          )
          return res.status(200).send("Transaction with ID: "+req.params.transaction_id+" was changed successful");
        }
      })
      .catch((err) => {
        return res.status(400).send(err.message);
      });
  }
  async getTransactionByUserID(req, res) {
    await Transaction.findAll({
      where: {
        user_id: req.params.user_id,
      },
    })
      .then((result) => {
        if (result.length > 0) {
          return res.status(200).send(result);
        } else {
          return res
            .status(400)
            .send("User with id: " + req.params.user_id + " haven't any transaction");
        }
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  }
}
module.exports = new TransactionController();

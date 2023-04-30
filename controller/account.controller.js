const { Account } = require("../db/index")
const db = require("../db")

class AccountController {
    async getAccounts(req, res) {
        await Account.findAll()
            .then((result) => {
                return res.status(200).send(result)
            })
            .catch((err) => {
                return res.status(400).send(err.message)
            })
    }
    async getAccountByID(req, res) {
        await Account.findAll({
            where: {
                id: req.params.account_id,
              },
        })
            .then((result) => {
                return res.status(200).send(result)
            })
            .catch((err) => {
                return res.status(400).send(err.message)
            })
    }
    async addAccounts(req, res) {
        console.log(req.body)
        const { user_id, name, cash, color } = req.body
        try {
            const result = await Account.create({
                user_id: user_id,
                name: name,
                cash: cash,
                color: color,
            })
            return res.status(200).send(result)
        } catch (err) {
            return res.status(400).send(err.message)
        }
    }

    async deleteAccountByID(req, res) {
        await Account.destroy({
            where: {
                id: req.params.account_id,
            },
        })
            .then((result) => {
                if (result === 0) {
                    return res
                        .status(400)
                        .send("Account with id " + req.params.account_id + " not found.")
                }
                return res
                    .status(200)
                    .send(
                        "Account with id " +
                        req.params.account_id +
                        " was deleted successfully."
                    )
            })
            .catch((err) => {
                return res.status(400).send(err.message)
            })
    }
    async patchAccountByID(req, res) {
        await Account.findOne({
            where: {
                id: req.params.account_id,
            },
        })
            .then((result) => {
                if (result === 0) {
                    return res
                        .status(400)
                        .send("Account with id " + req.params.account_id + " not found.")
                } else {
                    const { user_id, name, cash, color } =
                        req.body
                    Account.update(
                        {
                            user_id: user_id ?? db.sequelize.literal("user_id"),
                            name: name ?? db.sequelize.literal("name"),
                            cash: cash ?? db.sequelize.literal("cash"),
                            color: color ?? db.sequelize.literal("color"),
                        },
                        {
                            where: {
                                id: req.params.account_id,
                            },
                        }
                    )
                    return res.status(200).send("Account with ID: " + req.params.account_id + " was changed successful")
                }
            })
            .catch((err) => {
                return res.status(400).send(err.message)
            })
    }
}

module.exports = new AccountController()
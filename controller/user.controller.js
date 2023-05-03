const { User } = require("../db/index")
const db = require("../db")

class UserController {
    async getUsers(req, res) {
        await User.findAll()
            .then((result) => {
                return res.status(200).send(result)
            })
            .catch((err) => {
                return res.status(400).send(err.message)
            })
    }
    async addUser(req, res) {
        const { email, hashPass, isConfirmed } = req.body
        try {
            const result = await User.create({
                email: email,
                hashPass: hashPass,
                isConfirmed: isConfirmed,
            })
            return res.status(200).send(result)
        } catch (err) {
            return res.status(400).send(err.message)
        }
    }
    async deleteUserByID(req, res) {
        await User.destroy({
            where: {
                id: req.params.user_id,
            },
        })
            .then((result) => {
                if (result === 0) {
                    return res
                        .status(400)
                        .send("User with id " + req.params.user_id + " not found.")
                }
                return res
                    .status(200)
                    .send(
                        "User with id " +
                        req.params.user_id +
                        " was deleted successfully."
                    )
            })
            .catch((err) => {
                return res.status(400).send(err.message)
            })
    }
    async patchUserByID(req, res) {
        await User.findOne({
            where: {
                id: req.params.user_id,
            },
        })
            .then((result) => {
                if (result === 0) {
                    return res
                        .status(400)
                        .send("User with id " + req.params.user_id + " not found.")
                } else {
                    const { email, hashPass, isConfirmed } = req.body
                    User.update(
                        {
                            email: email ?? db.sequelize.literal("email"),
                            hashPass: hashPass ?? db.sequelize.literal("hashPass"),
                            isConfirmed: isConfirmed ?? db.sequelize.literal("isConfirmed"),
                        },
                        {
                            where: {
                                id: req.params.user_id,
                            },
                        }
                    )
                    return res.status(200).send("User with ID: " + req.params.user_id + " was changed successful")
                }
            })
            .catch((err) => {
                return res.status(400).send(err.message)
            })
    }
    async getUserByID(req, res) {
        await User.findOne({
            where: {
                id: req.params.user_id,
            },
        })
            .then((result) => {
                if (result) {
                    return res.status(200).send(result)
                } else {
                    return res
                        .status(400)
                        .send("User with id: " + req.params.user_id + " not found")
                }
            })
            .catch((err) => {
                return res.status(400).send(err.message)
            })
    }
}

module.exports = new UserController()
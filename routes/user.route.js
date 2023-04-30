const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller')
router.get("/",userController.getUsers)
router.get("/:user_id",userController.getUserByUserID)
router.post("/",userController.addUser)
router.delete("/:user_id",userController.deleteUserByID)
router.patch("/:user_id",userController.patchUserByID)
module.exports = router
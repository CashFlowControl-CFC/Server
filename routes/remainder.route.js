const express = require('express')
const router = express.Router()
const RemainderController = require('../controller/remainder.controller')

router.get("/",RemainderController.getRemainders)
router.get("/user/:user_id",RemainderController.getRemainderByUserID)
router.get("/:remainder_id",RemainderController.getRemainderByID)
router.post("/",RemainderController.addRemainder)
router.delete("/:remainder_id",RemainderController.deleteRemainderByID)
router.patch("/:remainder_id",RemainderController.patchRemainderByID)



module.exports = router
const express = require('express');
const router = express.Router();
const RemainderController = require('../controller/remainder.controller');

router.get("/",RemainderController.getRemainders)
router.get("/:user_id",RemainderController.getRemainderByUserID)
router.post("/",RemainderController.addRemainder)
router.patch("/:remainder_id",RemainderController.patchRemainderByID)
router.delete("/:remainder_id",RemainderController.deleteRemainderByID)


module.exports = router;
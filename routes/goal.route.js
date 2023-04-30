const express = require('express')
const router = express.Router()
const goalController = require('../controller/goal.controller')

router.get("/",goalController.getGoal)
router.get("/user/:user_id",goalController.getGoalByUserID)
router.get("/:goal_id",goalController.getGoalByID)
router.post("/",goalController.addGoal)
router.delete("/:goal_id",goalController.deleteGoalByID)
router.patch("/:goal_id",goalController.patchGoalByID)

module.exports = router
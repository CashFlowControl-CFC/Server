const express = require('express')
const router = express.Router()
const accountController = require('../controller/account.controller')

router.get('/',accountController.getAccounts)
router.get('/:account_id', accountController.getAccountByID)
router.post('/', accountController.addAccounts)
router.delete('/:account_id',accountController.deleteAccountByID)
router.patch('/:account_id',accountController.patchAccountByID)


module.exports = router
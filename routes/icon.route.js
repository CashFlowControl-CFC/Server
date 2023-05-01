const express = require('express');
const route = express.Router();
const IconController = require('../controller/icon.controller')
route.get('/',IconController.getIcons)
route.get('/:icon_id',IconController.getIconByID)
route.get('/category/:category_id',IconController.getIconByCategoryID)
route.post('/',IconController.addIcon)
route.patch('/:icon_id',IconController.patchIconByID)
route.delete('/:icon_id',IconController.deleteIconByID)

module.exports = route;
const express = require('express')
const route = express.Router()
const DefaultCategoryController = require('../controller/defaultCategory.controller')

route.get('/', DefaultCategoryController.getDefaultCategories)
route.get('/:defaultcategory_id',DefaultCategoryController.getDefaultCategoryByID)
route.post('/',DefaultCategoryController.addCategory)
route.delete('/:defaultcategory_id',DefaultCategoryController.deleteDefaultCategoryByID)
route.patch('/:defaultcategory_id',DefaultCategoryController.patchDefaultCategoryByID)

module.exports = route
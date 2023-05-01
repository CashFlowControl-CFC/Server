const express = require('express')
const router = express.Router()
const categoryController = require('../controller/category.controller')


router.get('/', categoryController.getCategories)
router.get('/user/:user_id', categoryController.getCategoryByUserID)
router.get('/:category_id',categoryController.getCategoryByID)
router.post('/', categoryController.addCategory)
router.delete('/:category_id', categoryController.deleteCategoryByID)
router.patch('/:category_id' , categoryController.patchCategoryByID)



module.exports = router
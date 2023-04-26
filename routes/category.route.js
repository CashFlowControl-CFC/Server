const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category.controller');


router.get('/', categoryController.getCategories);
router.get('/:user_id', categoryController.getCategoryByUserID);
router.get('/parents/:category_id',categoryController.GetParentCategories);
router.post('/', categoryController.addCategory);
router.delete('/:category_id', categoryController.deleteCategoryByID)
router.patch('/:category_id' , categoryController.patchCategoryByID)



module.exports = router;
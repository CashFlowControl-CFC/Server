const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category.controller');


router.get('/', categoryController.getCategories);
router.post('/create', categoryController.addCategory);
router.delete('/delete/:category_id', categoryController.deleteCategorynByID)
router.patch('/update/:category_id' , categoryController.patchCategoryByID)
router.get('/:user_id', categoryController.getCategoryByUserID);



module.exports = router;
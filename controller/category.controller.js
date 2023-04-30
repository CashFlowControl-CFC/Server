const { Category } = require("../db/index");
const db = require("../db");
class CategoryController {
    async getCategories(req, res) {
        await Category.findAll({
            where:{
                parent_category:null
            }
        })
            .then((result) => {
                return res.status(200).send(result);
            })
            .catch((err) => {
                return res.status(400).send(err.message);
            });
    }
    async addCategory(req, res) {
        console.log(req.body);
        const { user_id, parent_category, name, image_link, color } = req.body;
        try {
            const result = await Category.create({
                user_id: user_id,
                parent_category: parent_category ?? null,
                name: name,
                image_link: image_link,
                color: color,
            });
            return res.status(200).send(result);
        } catch (err) {
            return res.status(400).send(err);
        }
    }
    async deleteCategoryByID(req, res) {
        await Category.destroy({
            where: {
                id: req.params.category_id,
            },
        })
            .then((result) => {
                if (result === 0) {
                    return res
                        .status(400)
                        .send("Category with id " + req.params.category_id + " not found.");
                }
                return res
                    .status(200)
                    .send(
                        "Category with id " +
                        req.params.category_id +
                        " was deleted successfully."
                    );
            })
            .catch((err) => {
                return res.status(400).send(err.message);
            });
    }
    async patchCategoryByID(req, res) {
        console.log('Category patch')
        await Category.findOne({
            where: {
                id: req.params.category_id,
            },
        })
            .then((result) => {
                if (result === 0) {
                    return res
                        .status(400)
                        .send("Category with id " + req.params.category_id + " not found.");
                } else {
                    const { user_id, parent_category, name, image_link, color } = req.body;
                    Category.update(
                        {
                            user_id: user_id ?? db.sequelize.literal("user_id"),
                            parent_category: parent_category ?? db.sequelize.literal("parent_category"),
                            name: name ?? db.sequelize.literal("name"),
                            image_link: image_link ?? db.sequelize.literal("image_link"),
                            color: color ?? db.sequelize.literal("color"),
                        },
                        {
                            where: {
                                id: req.params.category_id,
                            },
                        }
                    )
                    return res.status(200).send("Category with ID: " + req.params.category_id + " was changed successful");
                }
            })
            .catch((err) => {
                return res.status(400).send(err.message);
            });
    }
    async getCategoryByUserID(req, res) {
        await Category.findAll({
            where: {
                user_id: req.params.user_id,
            },
        })
            .then((result) => {
                if (result.length > 0) {
                    return res.status(200).send(result);
                } else {
                    return res
                        .status(400)
                        .send("User with id: " + user_id + " haven't any Category");
                }
            })
            .catch((err) => {
                return res.status(400).send(err);
            });
    }
    async GetParentCategories(req, res) {
        const category_id = req.params.category_id;
        await Category.findAll({
            where: {
                parent_category: category_id
            }
        })
            .then((result) => {
                if (result.length > 0) {
                    return res.status(200).send(result);
                } else {
                    return res
                        .status(400)
                        .send("Category with id: " + category_id + " haven't any ParentCategory");
                }
            })
            .catch((err) => {
                return res.status(400).send(err);
            });
    }
}

module.exports = new CategoryController();

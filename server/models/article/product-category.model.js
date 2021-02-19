module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("product_categories", {
        product_categoryId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_category_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
        {tableName: 'product_categories', timestamps: false, underscored: false}
    );

    return Category;
}
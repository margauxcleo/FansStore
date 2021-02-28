module.exports = (sequelize, Sequelize) => {

    const Article = sequelize.define("articles", {
        articleId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        brand: {
            type: Sequelize.STRING,
            allowNull: true
        },
        price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        image: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        available_quantity: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
        {tableName: 'articles', timestamps: false, underscored: false}
    );

    return Article;

};
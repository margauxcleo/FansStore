module.exports = (sequelize, Sequelize) => {

    const Article = sequelize.define("article", {
        articleId: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        brand: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DECIMAL(10, 2)  
        },
        image: {
            type: Sequelize.TEXT 
        },
        description: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.INTEGER
        },
        universe: {
            type: Sequelize.INTEGER
        }
    });

    return Article;

};
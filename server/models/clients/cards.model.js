module.exports = (sequelize, Sequelize) => {

    const Card = sequelize.define("cards", {
        cardId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        card_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        card_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        card_exp_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        card_cvv: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
        {tableName: 'cards', timestamps: false, underscored: false}
    );

    return Card;

};
module.exports = (sequelize, Sequelize) => {

    const Orders = sequelize.define("orders", {
        orderId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        shipping: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        total_price: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        card_cvv: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    },
        {tableName: 'orders', timestamps: false, underscored: false}
    );

    return Orders;

};
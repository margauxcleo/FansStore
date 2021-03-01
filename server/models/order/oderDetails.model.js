module.exports = (sequelize, Sequelize) => {

    const OrdersDetails = sequelize.define("order_details", {
        orderDetailsId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
    },
        {tableName: 'orders_details', timestamps: false, underscored: false}
    );

    return OrdersDetails;

};
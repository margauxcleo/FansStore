module.exports = (sequelize, Sequelize) => {

    const Address = sequelize.define("addresses", {
        addressId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        address_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        street: {
            type: Sequelize.STRING,
            allowNull: false
        },
        zipcode: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
        {tableName: 'addresses', timestamps: false, underscored: false}
    );

    return Address;

};
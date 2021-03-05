module.exports = (sequelize, Sequelize) => {

    const Client = sequelize.define("clients", {
        clientId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        birth_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
    },
        {tableName: 'clients', timestamps: false, underscored: false}
    );

    return Client;

};
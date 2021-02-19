module.exports = (sequelize, Sequelize) => {
    const Universe = sequelize.define("universes", {
        universeId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        universe_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
        {tableName: 'universes', timestamps: false, underscored: false}
    );

    return Universe;
}
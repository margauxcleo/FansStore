const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// ARTICLES 
db.article = require("./article/article.model")(sequelize, Sequelize);
db.universe = require("./article/universe.model.js")(sequelize, Sequelize);
db.product_category = require("./article/product-category.model.js")(sequelize, Sequelize);

// db.universe.hasMany(db.article);
// db.product_category.hasMany(db.article);
db.article.belongsTo(db.universe, {
  foreignKey: "fk_universe",
  // as: "fk_universe"
});
db.article.belongsTo(db.product_category, {
  foreignKey: "fk_category",
  // as: "fk_category"
});

// CLIENTS 
db.client = require("./clients/clients.model")(sequelize, Sequelize);
db.address = require("./clients/addresses.model.js")(sequelize, Sequelize);
db.card = require("./clients/cards.model.js")(sequelize, Sequelize);

//  un carte a un client 
db.card.belongsTo(db.client, {
  foreignKey: "fk_clientId"
});
// une adresse a un client 
db.address.belongsTo(db.client, {
  foreignKey: "fk_clientId"
});
// un client peut avoir plusieurs adresses et cartes 
db.client.hasMany(db.card, { foreignKey: "fk_clientId", as : "cards"});
db.client.hasMany(db.address, { foreignKey: "fk_clientId", as: "addresses" });


module.exports = db;


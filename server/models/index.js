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

module.exports = db;




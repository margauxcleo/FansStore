module.exports = app => {
    const article = require("../controllers/article.controller");
  
    var router = require("express").Router();
  
    // Retrieve all Articles
    router.get("/", article.findAll);
  
    // USER STORY 2
    // // Retrieve a single Article with id
    // router.get("/:id", articles.findOne);
  
    app.use('/articles', router);
};
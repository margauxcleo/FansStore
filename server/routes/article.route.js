module.exports = app => {
    const article = require("../controllers/article.controller");
  
    var router = require("express").Router();
  
    // Retrieve all Articles
    router.get("/", article.findAllArticles);

    //  USER STORY 2 Retrieve one article with his id
    router.get("/:id", article.findArticleById);
    
    app.use('/articles', router);
};
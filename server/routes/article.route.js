module.exports = app => {
    const article = require("../controllers/article.controller");
  
    var router = require("express").Router();
  
    // Retrieve all Articles
    router.get("/", article.findAllArticles);

    //  USER STORY 2 Retrieve one article with his id
    router.get("/:id", article.findArticleById);
    
    // User Story 4 
    // All articles from universe = harry-potter
    router.get("/universe/harry-potter", article.findAllArticlesHarryPotter);
    // All articles from universe = star-wars
    router.get("/universe/star-wars", article.findAllArticlesStarWars);
    // All articles from universe = harry-potter
    router.get("/universe/marvel", article.findAllArticlesMarvel);
    // All articles from universe = harry-potter
    router.get("/universe/sda", article.findAllArticlesSda);
    
    app.use('/articles', router);
};
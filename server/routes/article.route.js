module.exports = app => {
    const article = require("../controllers/article.controller");
  
    var router = require("express").Router();
  
    // Retrieve all Articles
    router.get("/", article.findAllArticles);

    //  USER STORY 2 Retrieve one article with his id
    router.get("/:id", article.findArticleById);
    
    // User Story 4 
    // All articles from universe = harry-potter
    router.get("/univers/harry-potter", article.findAllArticlesHarryPotter);
    // All articles from universe = star-wars
    router.get("/univers/star-wars", article.findAllArticlesStarWars);
    // All articles from universe = harry-potter
    router.get("/univers/marvel", article.findAllArticlesMarvel);
    // All articles from universe = harry-potter
    router.get("/univers/seigneur-des-anneaux", article.findAllArticlesSda);
    
    app.use('/produits', router);
};
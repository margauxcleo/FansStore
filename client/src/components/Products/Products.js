import { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {

    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {

        const response = await fetch("http://localhost:8000/articles", {
          method: "GET",
          mode: "cors",
        });
        const parseResponse = await response.json();
        setArticles(parseResponse);
      };

      useEffect(() => {
        fetchArticles();
      }, []);

      return (
        <div className="fond">
          <h1 align="center">Articles</h1>
          <div className="grid">
           <div className="container entete">
             <h2 className="sous-titre">Pick one and let's travel !</h2>
           </div>
           <div class="container univers">
             <div class="row d-flex justify-content-around">
              <div class="cercle_1">
                <a><h3 class="star_wars_title">Star Wars</h3></a>
            </div>
            <div class="cercle_2">
                <a><h3 class="harry_potter_title">Harry Potter</h3></a>
            </div>
            <div class="cercle_3">
                <a><h3 class="marvel_titre">Marvel </h3></a>
            </div>
            <div class="cercle_4">
                <a><h3 class="seigneur_titre">Seigneur des Anneaux</h3></a>
            </div>
             </div>
           </div>
          </div>
          <div class="row d-flex justify-content-around">
            {articles.map((article) => {
              return (
                <div class="card" key={article.articleId}>
                  <div class="card-body">
                    <h5 class="card-title black">{article.name}</h5>
                    <p class="card-text black">{article.brand}</p>
                    <p class="card-text black">{article.price} $</p>
                    <img class="card-img-top" src={article.image} alt="Card image cap"/>
                    <p class="card-text black">{article.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
      );
};

export default Products;

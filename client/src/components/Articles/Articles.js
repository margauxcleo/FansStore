import { useState, useEffect } from 'react';

import ArticlesNav from '../ArticlesNav/ArticlesNav';

import './Articles.css'; 

const Articles = () => {

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
        <>
            <div className="articles p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded row d-flex justify-content-around">
                < ArticlesNav />

                <div class="card-deck ">
                    {articles.map((article) => {
                        return (
                        <div class="card" key={article.articleId}>
                            <img class="card-img-top" src={article.image} alt={article.name}/>
                            <div class="card-body">
                                <h5 class="card-title">{article.name}</h5>
                                <h4 className="brand">{article.brand}</h4>
                                <h3 className="price">{article.price} €</h3>
                                <p class="card-text description">
                                    {article.description}
                                </p>
                            </div>
                        </div>
                         );
                     })}
                </div>
            </div>
        </>
    );
}

export default Articles;
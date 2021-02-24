import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticlesNav from '../ArticlesNav/ArticlesNav';

import './Articles.css'; 


const Articles = () => {

    
    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {

        const response = await fetch("http://localhost:8088/articles", {
          method: "GET",
          mode: "cors",
        });
        const parseResponse = await response.json();
        console.log(parseResponse);
        setArticles(parseResponse);
      };

      useEffect(() => {
        fetchArticles();
      }, []);

    return (
        <>
            <div className="articles p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded row d-flex justify-content-around">
                < ArticlesNav />
                <div className="card-deck ">
                    {articles.map((article) => {
                        return (
                        <Link to={`/produits/produit/${article.articleId}`} key={article.articleId}>
                            <div className="card">
                                <img className="card-img-top" src={article.image} alt={article.name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{article.name}</h5>
                                    <h4 className="brand">{article.brand}</h4>
                                    <h3 className="price">{article.price} €</h3>
                                </div>
                            </div>
                        </Link>
                         );
                     })}
                </div>
            </div>
        </>
    );
}

export default Articles;
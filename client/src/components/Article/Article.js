import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


import './Article.css'; 

const Article = (props) => {

     const [article, setArticle] = useState({
         "articleId": "",
         "name": "",
         "brand": "",
         "price": "",
         "image": "",
         "description": "",
         "fk_universe": "",
         "fk_category": ""
     });

     const { id } = useParams();

     const fetchArticle = async (id) => {

        const response = await fetch(`http://localhost:8088/articles/${id}`,  {
            method: "GET",
            mode: "cors",
            headers: {
                'Accept': 'application/json'
            }  
        });
        const parseResponse = await response.json();
        console.log(parseResponse);
        setArticle(parseResponse);
       };

       useEffect(() => {
            fetchArticle(id);
       }, []);

    return (
        <>
            <div className="article mx-auto col-xl-10 col-lg-11 col-md-11 col-sm-12">
                <div className="row d-flex justify-content-around col-lg-12 col-sm-12">
                    <div className="offset-xl-1 col-xl-4 col-lg-5 col-md-4 col-sm-12">
                        <img className="card-img-top" src={article.image} alt={article.name}/>
                    </div>
                    <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6 offset-md-1 col-md-6 col-sm-12">
                        <h3>{article.name}</h3>
                        <p className="brand">{article.brand}</p>
                        <p className="price">{article.price} €</p>
                        <button className="btn btn-primary">Ajouter au panier</button>
                    </div>
                </div>
                <br/>
                <div className="col-lg-12 col-sm-12">
                    <h3>Caractéristiques du produit</h3>
                    <p className="description">{article.description}</p>
                </div>
            </div>
        </>
    );
}

export default Article;

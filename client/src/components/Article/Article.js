import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';


import './Article.css'; 

const Article = (props) => {

    const path = "../../";

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
        });
        const parseResponse = await response.json();
        console.log(parseResponse);
        setArticle(parseResponse);
       };

       useEffect(() => {
            fetchArticle(id);
       }, []);

       console.log(article.image)

    return (
        <>
            <div key={article.articleId} className="article mx-auto col-xl-10 col-lg-11 col-md-11 col-sm-12">
                <div className="row d-flex justify-content-around col-lg-12 col-sm-12">
                    <div className="d-flex justify-content-end offset-xl-1 col-xl-4 offset-lg-1 col-lg-4 offset-md-1 col-md-4 col-sm-12">
                        <ReactFancyBox image={path + article.image} alt={article.name}/>
                        {/* <img className="card-img-top" src={path + article.image} alt={article.name}/> */}
                    </div>
                    <div className="infos d-flex flex-column justify-content-center offset-xl-1 col-xl-6 offset-lg-1 col-lg-6 offset-md-1 col-md-6 col-sm-12">
                        <h3 className="name">{article.name}</h3>
                        <p className="brand">{article.brand}</p>
                        <p className="price">{article.price} €</p>
                        <button className="btn btn-primary">Ajouter au panier</button>
                    </div>
                </div>
                <br/>
                <div className="infos2 col-lg-12 col-sm-12">
                    <h2>Caractéristiques du produit</h2>
                    <p className="description">{article.description}</p>
                </div>
            </div>
        </>
    );
}

export default Article;

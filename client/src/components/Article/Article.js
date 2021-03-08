import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import ReactFancyBox from 'react-fancybox';
import Paiement from '../Order/Paiement.js';
import 'react-fancybox/lib/fancybox.css';


import './Article.css';

const Article = (props) => {

    const { handleAddToCart, handleGetCart } = props;

    // on retrouve l'objet contenant l'article concerné avec un filtrer sur cart
    // if (!article) {
    //     const articleInCart = cart.filter(cartItem => cartItem.id = article.articleId);
    //     console.log(articleInCart);
    // }
    

    const path = "../../";

    const [article, setArticle] = useState({
        "articleId": "",
        "name": "",
        "brand": "",
        "price": "",
        "image": "",
        "description": "",
        "available_quantity": "",
        "fk_universe": "",
        "fk_category": ""
    });

    const { id } = useParams();

    const fetchArticle = async (id) => {

        const response = await fetch(`http://localhost:8088/produits/${id}`, {
            method: "GET",
            mode: "cors",
        });
        const parseResponse = await response.json();
        // console.log(parseResponse);
        setArticle(parseResponse);
    };

    useEffect(() => {
        fetchArticle(id);
    }, []);


    return (
        <>
            <div key={article.articleId} className="article mx-auto col-xl-10 col-lg-11 col-md-11 col-sm-12">
                <div className="row d-flex justify-content-around col-lg-12 col-sm-12">
                    <div className="d-flex justify-content-end offset-xl-1 col-xl-4 offset-lg-1 col-lg-4 offset-md-1 col-md-4 col-sm-12">
                        <ReactFancyBox image={path + article.image} alt={article.name} />
                        {/* <img className="card-img-top" src={path + article.image} alt={article.name}/> */}
                    </div>
                    <div className="infos d-flex flex-column justify-content-center offset-xl-1 col-xl-6 offset-lg-1 col-lg-6 offset-md-1 col-md-6 col-sm-12">
                        <h3 className="name">{article.name}</h3>
                        <p className="brand">{article.brand}</p>
                        <p className="price">{article.price} €</p>
                        <button 
                            id="cart-btn"
                            className="btn btn-primary"
                            onClick={(event) => handleAddToCart(event, article)}
                        >   
                            Ajouter au panier
                        </button>
                        <br/>
                        <div id="error-message">
                            <div className="alert alert-danger" role="alert">
                                Plus de quantité disponible en stock !
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="infos2 col-lg-12 col-sm-12">
                    <h2>Caractéristiques du produit</h2>
                    <p className="description">{article.description}</p>
                </div>
            </div>
        </>
    );
}

export default Article;
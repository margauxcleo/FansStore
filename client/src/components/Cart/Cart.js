// Composant permettant d'afficher le titre de la page 
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

import './Cart.css';

const Cart = (props) => {

    const { handleAddToCart, handleDeleteFromCart, handleGetCart, handleIncrement, handleDecrement} = props;

    // console.log(cart.json());
    // const panier = cart.json();

    const { cart, loading } = props.cart;

    // calcul du prix total (reduce?)
    let totalPrice = cart.reduce( (total, article) => {
        // console.log(`Prix  => ${article.price} Quantité => ${article.quantity}`);
        // console.log(`Total => ${total}`);
        // console.log('-----------');
        return total + (article.price * article.quantity);
    },0);

    // on met à jour le panier à chaque fois qu'on render cette page 
    useEffect(() => {
        handleGetCart();
      }, []);

    return (
        <>
            <div className="jumbotron jumbotron-universes p-3 p-md-5 mx-auto col-xl-11 col-lg-11 col-md-11 col-sm-12 rounded  d-flex align-items-center">
                <div className="px-0 mx-auto jumb-div-title" >
                    <h1 className="display-4 mx-auto">Panier</h1>
                </div>
            </div>
            <div className="cart row p-3 mb-2 mx-auto col-xl-11 col-lg-11 col-md-11 col-sm-12 rounded d-flex align-items-center">
                {(cart.length === 0 ) ? (
                    <div>Il n'y a aucun article dans votre panier.</div>
                ) : (
                    <section className="row col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex flex-row justify-content-between align-items-start">
                        <div className="cart-div col-xl-7 col-lg-7 col-md-8 col-sm-12 mb-2">
                            {(cart.map((cartItem, key) => {
                                return (
                                <div key={key} className="row d-flex flex-row justify-content-between align-items-start mb-2">
                                    <div className="item-info col-xl-7 col-lg-7 col-md-7 col-sm-12 d-flex justify-content-start align-items-start mb-4">
                                        <div>
                                            <img className="miniature" src={cartItem.image}/>
                                        </div>
                                        <div>
                                            <h5>{cartItem.name}</h5>
                                            <h5>{cartItem.brand}</h5>
                                        </div>
                                    </div>
                                    <div className="item-info offset-xl-1 col-xl-4 offset-lg-1 col-lg-4 offset-md-1 col-md-4 col-sm-12 d-flex flex-column justify-content-center align-items-center mb-2">
                                        <h5 className="price mb-4">{cartItem.quantity} x {Math.round((cartItem.price * cartItem.quantity)*100)/100} € TTC</h5>
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <button className="btn btn-secondary" onClick={(e) => handleIncrement(e, key)}> 
                                            {/* ou remplacer key par cartItem.articleId */}
                                                <i className="fas fa-plus"></i>
                                            </button>
                                            <button className="btn btn-secondary" onClick={(e) => handleDecrement(e, key)}>
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button className="btn btn-danger" onClick={(e) => handleDeleteFromCart(e, key)}>
                                                <i className="fas fa-trash-alt">
                                            </i></button>
                                        </div>
                                    </div>
                                </div>)}
                            ))}
                        </div>
                        <div className="cart-div d-flex flex-column justify-content-around align-items-center offset-xl-1 col-xl-4 offset-lg-1 col-lg-4 offset-md-1 col-md-3 col-sm-12">
                            <div >
                                <h5>Somme totale: 
                                    <br/>
                                    <span className="price"> { Math.round(totalPrice * 100)/100 } € TTC</span>
                                </h5>
                            </div>
                            <br/>
                            <button className="btn btn-primary">
                            <Link to="/paiement" style={{ textDecoration: 'none', color: 'white'}}>
                                Procéder au paiement
                            </Link>
                            </button>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}

export default Cart;
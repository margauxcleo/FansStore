// Composant permettant d'afficher le titre de la page 
import { useState, useEffect } from 'react';

import './Cart.css';

const Cart = (props) => {

    const { handleAddToCart, handleDeleteFromCart, handleGetCart } = props;

    // console.log(cart.json());
    // const panier = cart.json();

    const { cart, loading } = props.cart;

    // on veut compter le nombre d'occurence par id 

    // puis mapper sur une seule occurence pour avoir une seule clé unique

    // on met à jour le panier à chaque fois qu'on render cette page 
    useEffect(() => {
        handleGetCart();
      }, []);

    return (
        <>
            <div>test</div>
            <p></p>

            {/* <div className="jumbotron jumbotron-universes p-3 p-md-5 mx-auto col-xl-11 col-lg-11 rounded">
                <div className="px-0 mx-auto jumb-div-title" >
                    <h1 className="display-4 mx-auto">Panier</h1>
                </div>
                {(cart.length === 0 ) ? (
                    <div>Il n'y a aucun article dans votre panier.</div>
                ) : (
                    <section>
                        <div>
                            {(cart.map((cartItem) => {
                                return (
                                <div key={cartItem.articleId}>
                                    <div>
                                        <div>image produit</div>
                                        <div>Nom produit</div>
                                    </div>
                                    <div>
                                        <p>quantité x prix</p>
                                        <button onClick={(e) => handleDeleteFromCart(e, cartItem.articleId)}>+</button>
                                        <button>-</button>
                                        <button>Supprimer</button>
                                    </div>
                                </div>)}
                            ))}
                        </div>
                        <div>
                            <div>
                                <h4>Somme totale</h4>
                                <p>00,00 €</p>
                            </div>
                            <div>
                                <button>Procéder au paiement</button>
                            </div>
                        </div>
                    </section>
                )}
            </div> */}
        </>
    );
}

export default Cart;
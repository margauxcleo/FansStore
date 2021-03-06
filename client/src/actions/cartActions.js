import { ADD_CART_ITEM, REMOVE_CART_ITEM, GET_CART } from "./types";

// Ajouter au panier
export const addToCart = (cartItem) => {
    return {
        type: ADD_CART_ITEM,
        payload: cartItem,
    };
};

// Afficher le panier
export const getCart = () => {
    return {
    type: GET_CART,
    payload: JSON.parse(localStorage.getItem("Cart"))
  };
};

// supprimer un item du panier
export const removeFromCart = (id) => {
    return {
    type: REMOVE_CART_ITEM,
    payload: id
  };
};
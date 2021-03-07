import { ADD_CART_ITEM, REMOVE_CART_ITEM, GET_CART, INCREASE_QUANTITY, DECREASE_QUANTITY} from "./types";

// Ajouter au panier
export const addToCart = (cartItem) => {
    return {
        type: ADD_CART_ITEM,
        payload: cartItem,
    };
};

export const increment = (cartItem) => {
    return {
        type: INCREASE_QUANTITY,
        payload: cartItem,
    }
}

export const decrement = (cartItem) => {
    return {
        type: DECREASE_QUANTITY, 
        payload: cartItem,
    }
}

// Afficher le panier
export const getCart = () => {
    return {
    type: GET_CART,
    payload: JSON.parse(localStorage.getItem("Cart"))
  };
};

// supprimer un item du panier
export const removeFromCart = (cartItem) => {
    return {
    type: REMOVE_CART_ITEM,
    // payload: id
    payload: cartItem,
  };
};
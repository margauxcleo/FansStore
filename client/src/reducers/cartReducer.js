import { ADD_CART_ITEM, REMOVE_CART_ITEM, GET_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../actions/types";

const initialState = {
    cart: [],
    itemCartNb: 0,
    loading: false
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            // Si le panier est vide, on créé un nouvel item 
            if (state.numberCart == 0) {
                // on créé le format souhaité d'un item dans le panier
                let cartItem = {
                    id: action.payload.articleId,
                    name: action.payload.name,
                    brand: action.payload.brand,
                    price: action.payload.price,
                    image: action.payload.image,
                    available_quantity: action.payload.available_quantity,
                    quantity: 1
                }
                // on ajoute l'item au panier via un push
                state.cart.push(cartItem);
            } else {
                // si l'item est déjà présent dans le panier, on augmente sa quantité
                // on fait la recherche par son id 
                let check = false;
                state.cart.map((item, key) => {
                    if (item.id == action.payload.articleId) {
                        state.cart[key].quantity++;
                        check = true;
                    }
                });

                // si l'article n'existe pas dans le panier, on le crée avec quantité 1
                if (!check) {
                    let _cart = {
                        id: action.payload.articleId,
                        name: action.payload.name,
                        brand: action.payload.brand,
                        price: action.payload.price,
                        image: action.payload.image,
                        available_quantity: action.payload.available_quantity,
                        quantity: 1
                    }
                    state.cart.push(_cart);

                    localStorage.setItem(
                        "Cart",
                        JSON.stringify([...state.cart, _cart])
                    );
                }
            }

            localStorage.setItem(
                "Cart",
                JSON.stringify([...state.cart])
            );

            return {
                ...state,
                itemCartNb: state.numberCart + 1,
                cart: JSON.parse(localStorage.getItem("Cart"))
            }

        case INCREASE_QUANTITY:
            
            // if (action.payload.quantity <= action.payload.available_quantity) {
                
            // }
            state.itemCartNb++;
            state.cart[action.payload].quantity++;

            localStorage.setItem(
                "Cart",
                JSON.stringify([...state.cart])
            );

            return {
                ...state,
                cart: JSON.parse(localStorage.getItem("Cart"))
            }

        case DECREASE_QUANTITY:
            let toDecreaseQuantity = state.cart[action.payload].quantity;
            if (toDecreaseQuantity >= 1) {
                state.itemCartNb--;
                state.cart[action.payload].quantity--;

                localStorage.setItem(
                    "Cart",
                    JSON.stringify([...state.cart])
                );
            }

            return {
                ...state,
                cart: JSON.parse(localStorage.getItem("Cart"))
            }

        case GET_CART:
            return {
                ...state,
                cart: action.payload
            };

        case REMOVE_CART_ITEM:

            let quantity_ = state.cart[action.payload].quantity;

            localStorage.setItem(
                "Cart",
                JSON.stringify([
                    ...state.cart.filter(cartItem => cartItem.id != state.cart[action.payload].id)
                ])
            );

            return {
                ...state,
                itemCartNb: state.itemCartNb - quantity_,
                cart: JSON.parse(localStorage.getItem("Cart"))

            }

        default:
            return state;

    }
}

export default cartReducer;
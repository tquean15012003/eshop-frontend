import { ADD_TO_CART, CHANGE_QUANTITY, DELETE_SHOES, EMPTY_CART } from "./Constants";

const stateDefault = {
    cart: []
};

export const ProductReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const product = action.product;
            let quantity = parseInt(action.quantity)
            const index = state.cart.findIndex(item => item.id === product.id)
            if (index === -1) {
                state.cart.push({ ...product, quantity })
            } else {
                state.cart[index].quantity += quantity
            }
            return { ...state };
        }
        case CHANGE_QUANTITY: {
            const product = action.product;
            let quantity = parseInt(action.quantity)
            const index = state.cart.findIndex(item => item.id === product.id)
            state.cart[index].quantity = quantity
            return { ...state };
        }

        case DELETE_SHOES: {
            const product = action.product;
            state.cart = state.cart.filter(item => item.id !== product.id)
            return { ...state };
        }

        case EMPTY_CART: {
            return { ...state, cart: [] };
        }

        default: return { ...state };
    };
};
import { ADD_TO_CART, CHANGE_QUANTITY, DELETE_SHOES, EMPTY_CART } from "./Constants";

export const addToCartAction = (product, quantity) => ({
    type: ADD_TO_CART,
    product,
    quantity
})

export const changeQuantityAction = (product, quantity) => ({
    type: CHANGE_QUANTITY,
    product,
    quantity
})

export const deleteShoesAction = (product) => ({
    type: DELETE_SHOES,
    product
})

export const emptyCartAction = () => ({
    type: EMPTY_CART
})
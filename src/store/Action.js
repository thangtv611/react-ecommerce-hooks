export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_PRODUCT = "SET_PRODUCT";

export const addProduct = (payload) => {
    return {
        type: ADD_PRODUCT,
        payload,
    };
};

export const setProducts = (products) => {
    return {
        type: SET_PRODUCT,
        products: products,
    };
};

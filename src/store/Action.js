export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addProduct = (payload) => {
    return {
        type: ADD_PRODUCT,
        payload
    }
};

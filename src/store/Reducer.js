import { ADD_PRODUCT, REMOVE_FROM_CART, SET_PRODUCT } from "./Action";

const Reducer = (state, action) => {
    console.log({ action });
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                carts: [...state.carts, { ...action.payload, qty: 1 }],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                carts: state.carts.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case SET_PRODUCT:
            return {
                ...state,
                products: action.products,
            };
        default:
            return state;
    }
};

export { Reducer };

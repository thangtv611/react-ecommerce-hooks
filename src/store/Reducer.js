import { ADD_PRODUCT, REMOVE_FROM_CART } from "./Action";

const Reducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const newState = {
                ...state,
                carts: [...state.carts, { ...action.payload, qty: 1 }],
            };
            // console.log({ newState });
            return newState;
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                carts: state.carts.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        }

        default:
            // console.log("default");
            return state;
    }
};

export { Reducer };

import { createContext, useContext, useReducer } from "react";
import { Reducer } from "./Reducer";
import { faker } from "@faker-js/faker";

const Context = createContext();

const Provider = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        inStock: faker.helpers.arrayElement([0, 5, 7, 9]),
        fastDelivery: faker.datatype.boolean(),
        rating: faker.helpers.arrayElement([1,2,3,4,5])
    }));

    console.log('products: ', products);

    const [state, dispatch] = useReducer(Reducer, {
        products,
        carts: [],
    });

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;

export const CartState = () => {
    return useContext(Context);
}
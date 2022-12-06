import React from "react";
import { CartState } from "../store/Provider";
import Product from "./Product";
import Filter from "./Filter";
import { addProduct } from "../store/Action";

const Home = () => {
    const {
        state: { products = [], carts },
        dispatch,
    } = CartState();

    const handleAddToCart = (productId) => {
        dispatch(addProduct(productId));
    };

    return (
        <div className="home">
            <Filter />
            <div className="productList">
                {products.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            prod={product}
                            handleAddToCart={handleAddToCart}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Home;

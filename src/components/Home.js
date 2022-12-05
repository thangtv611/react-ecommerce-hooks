import React from "react";
import { CartState } from "../store/Provider";
import Product from "./Product";
import Filter from "./Filter";

const Home = () => {
    const {
        state: { products },
    } = CartState();

    return (
        <div className="home">
            <Filter />
            <div className="productList">
                {products.map((product) => {
                    return <Product prod={product} />;
                })}
            </div>
        </div>
    );
};

export default Home;

import { Button } from "react-bootstrap";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useEffect } from "react";
import axios from "axios";
import { CartState } from "./store/Provider";
import { setProducts } from "./store/Action";

function App() {
    const { dispatch } = CartState();

    useEffect(() => {
        axios("http://localhost:3001/api/products").then((resp) => {
            dispatch(setProducts(resp.data));
        });
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/cart" exact>
                    <Cart />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

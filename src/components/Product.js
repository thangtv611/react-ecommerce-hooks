import React from "react";
import { Card, Button } from "react-bootstrap";
import { ADD_PRODUCT, REMOVE_FROM_CART } from "../store/Action";
import { CartState } from "../store/Provider";
import Rating from "./Rating";

const Product = ({ prod, handleAddToCart }) => {
    const {
        state: { carts },
        dispatch,
    } = CartState();

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="bottom" src={prod.image}></Card.Img>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle>
                    <span>${prod.price}</span>
                    {prod.fastDelivery ? (
                        <div>Fast delivery</div>
                    ) : (
                        <div>4 days delivery</div>
                    )}
                    <div>In stock: {prod.inStock}</div>
                    <Rating rating={prod.rating} />
                    {carts.some((card) => card.id === prod.id) ? (
                        <Button
                            onClick={() =>
                                dispatch({
                                    type: REMOVE_FROM_CART,
                                    payload: prod,
                                })
                            }
                            variant="danger"
                        >
                            Remove from card
                        </Button>
                    ) : (
                        <Button
                            disabled={prod.inStock === 0}
                            onClick={() =>
                                dispatch({ type: ADD_PRODUCT, payload: prod })
                            }
                        >
                            {prod.inStock === 0
                                ? "Out of stock"
                                : "Add to card"}
                        </Button>
                    )}
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
};

export default Product;

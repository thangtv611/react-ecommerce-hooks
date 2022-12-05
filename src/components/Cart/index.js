import React from "react";
import { Form, Image, ListGroup, Button } from "react-bootstrap";
import { CartState } from "../../store/Provider";
import Rating from "../Rating";
import { AiFillDelete } from "react-icons/ai";
import "./cart.style.css";
import styled from "styled-components";

const ListGroupItemStyled = styled(ListGroup.Item)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CardImage = styled(Image)`
    width: 100px;
    border-radius: 10px;
`;

const ListGroupStyled = styled(ListGroup)`
    width: 70%;
    margin: 20px;
`;

const CheckedOut = styled.div`
    width: 30%;
    background-color: #343a40;
    margin: 20px;
    color: white;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-items: center;
`;

const Cart = () => {
    const {
        state: { products, carts },
        dispatch,
    } = CartState();
    return (
        <div className="home">
            <ListGroupStyled>
                {carts.map((cart) => (
                    <ListGroupItemStyled>
                        <CardImage src={cart.image} />
                        <span>{cart.name}</span>
                        <span>${cart.price}</span>
                        <span>
                            <Rating rating={cart.rating} />
                        </span>
                        <Form.Group>
                            <Form.Label>Select quantity:</Form.Label>
                            <Form.Control as="select">
                                {[...Array(cart.inStock)].map((_, index) => (
                                    <option>{index+1}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <AiFillDelete />
                    </ListGroupItemStyled>
                ))}
            </ListGroupStyled>
            <CheckedOut>
                <h2>Subtotal (1) items</h2>
                <span>Total: $1000</span>
                <Button>Proceed to Checkout</Button>
            </CheckedOut>
        </div>
    );
};

export default Cart;

import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ prod }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="bottom" src={prod.image}></Card.Img>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle>
                    <span>💲 {prod.price}</span>
                    {prod.fastDelivery ? (
                        <div>Fast delivery</div>
                    ) : (
                        <div>4 days delivery</div>
                    )}
                    <Rating rating={prod.rating} />
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
};

export default Product;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { setProducts } from "../store/Action";
import { CartState } from "../store/Provider";
import Rating from "./Rating";

const Filter = () => {
    const {
        state: { products },
        dispatch,
    } = CartState();
    const [rating, setRating] = useState(0);

    useEffect(() => {
        axios("http://localhost:3001/api/products?rating=" + rating).then(
            (resp) => {
                dispatch(setProducts(resp.data));
            }
        );
    }, [rating]);

    const handleRating = (point) => {
        setRating(point);
    };

    const handleClearFilter = () => {
        setRating(0);
    };

    return (
        <div className="filters">
            <span className="title">Filter product</span>
            <span>
                <Form.Check
                    inline
                    type="radio"
                    name="group1"
                    label="Ascending"
                    id={`inline-1`}
                ></Form.Check>
            </span>
            <span>
                {" "}
                <Form.Check
                    inline
                    type="radio"
                    label="Descending"
                    id={`inline-2`}
                ></Form.Check>
            </span>
            <span>
                <Form.Check
                    inline
                    type="checkbox"
                    name="group2"
                    label="Include Out of stock"
                    id={`inline-3`}
                ></Form.Check>
            </span>
            <span>
                <Form.Check
                    inline
                    type="checkbox"
                    name="group2"
                    label="Fast delivery Only"
                    id={`inline-4`}
                ></Form.Check>
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating:</label>
                <Rating rating={rating} handleRating={handleRating} />
            </span>
            <Button onClick={handleClearFilter} variant="light">
                Clear Filters
            </Button>
            <span style={{ marginTop: 20 }}>
                Total products: {products.length}
            </span>
        </div>
    );
};

export default Filter;

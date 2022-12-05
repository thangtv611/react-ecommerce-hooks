import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "./Rating";

const Filter = () => {
    const [rating, setRating] = useState(3);

    const handleRating = (point) => {
        console.log('point: ', point);
        setRating(point);
    }

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
                <label style={{paddingRight: 10 }}>Rating:</label>
                <Rating rating={rating} handleRating={handleRating} />
            </span>
            <Button variant="light">Clear Filters</Button>
        </div>
    );
};

export default Filter;

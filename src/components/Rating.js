import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, handleRating }) => {
    return (
        <>
            {[...Array(5)].map((_, index) => {
                return (
                    <span
                        key={index}
                        onClick={() => handleRating(index + 1)}
                        style={{ cursor: "pointer" }}
                    >
                        {rating > index ? <AiFillStar /> : <AiOutlineStar />}
                    </span>
                );
            })}
        </>
    );
};

export default Rating;

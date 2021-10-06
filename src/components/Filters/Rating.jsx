import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, clickHandler, style }) => {
  return (
    <>
      {[
        ...Array(5).map((_, index) => {
          return (
            <span>
              {rating > index ? (
                <AiFillStar fontSize="15px" />
              ) : (
                <AiOutlineStar fontSize="15px" />
              )}
            </span>
          );
        }),
      ]}
    </>
  );
};

export default Rating;

import React from "react";
import { ImStarFull, ImStarEmpty } from "react-icons/im";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index} onClick={() => onClick(index)} style={style}>
            {rating > index ? (
              <ImStarFull fontSize="15px" />
            ) : (
              <ImStarEmpty fontSize="15px" />
            )}
          </span>
        );
      })}
    </>
  );
};

export default Rating;

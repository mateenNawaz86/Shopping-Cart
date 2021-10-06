import React, { useState } from "react";
import Rating from "./Rating";

const Filter = () => {
  const [rate, setRate] = useState(2);

  const filterData = [
    {
      type: "radio",
      id: "inline-1",
      label: "Ascending",
    },
    {
      type: "radio",
      id: "inline-2",
      label: "Descending",
    },
    {
      type: "checkbox",
      id: "inline-2",
      label: "Include out of Stock",
    },
    {
      type: "checkbox",
      id: "inline-4",
      label: "Fast Delivery",
    },
  ];

  return (
    <>
      <div className="filters sticky-top">
        <span className="title">Filter Product</span>
        {filterData.map((filter) => {
          return (
            <span key={filter.id}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type={filter.type}
                  id={filter.id}
                />
                <label className="form-check-label" htmlFor={filter.id}>
                  {filter.label}
                </label>
              </div>
            </span>
          );
        })}

        <span>
          <label htmlFor="rating" style={{ paddingRight: 10 }}>
            Rating:
          </label>
          <Rating
            onClick={(index) => setRate(index + 1)}
            rating={rate}
            style={{ cursor: "pointer" }}
          />
        </span>
        <button className="btn btn-danger">Clear Filters</button>
      </div>
    </>
  );
};

export default Filter;

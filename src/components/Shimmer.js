import React from "react";

const Shimmer = () => {
  return (
    <div data-testid="shimmer-ui" className="restaurant-list">
      {Array(20)
        .fill("")
        .map((item, index) => {
          return (
            <div key={index} className="shimmer-card">
              {item}
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;

import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <div className="nike-container">
      <Title title={title} />
      <div
        className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
          ifExists
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {items?.map((item, i) => (
          <Item {...item} key={i} ifExists={ifExists} />
        ))}
      </div>
    </div>
  );
};

export default Sales;

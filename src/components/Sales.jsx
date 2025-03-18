import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  // console.log(endpoint)
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 pb-10
            sm:grid-cols-2 grid-cols-4 xl:grid-cols-3 md:grid-cols-2`}
        >
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;

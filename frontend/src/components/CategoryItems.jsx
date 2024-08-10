import React from "react";
import { LuActivitySquare, LuMoreHorizontal } from "react-icons/lu";

const CategoryItems = ({ name, onAddCategoryClick }) => {
  return (
    <div
      className="card bg-base-100 w-60 shadow-xl m-2 h-60"
      onClick={name ? null : onAddCategoryClick}
    >
      <div className="card-body place-content-center items-center text-center">
        {name ? (
          <div className="card-title flex flex-col font-bold text-xl">
            <div className="text-2xl rounded-full bg-white p-3">
              <LuActivitySquare />
            </div>
            <h2>{name}</h2>
          </div>
        ) : (
          <h2 className="card-title place-content-center text-gray-400 text-4xl cursor-pointer w-full h-full">
            +
          </h2>
        )}
      </div>
    </div>
  );
};

export default CategoryItems;

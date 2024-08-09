import React from "react";

const CategoryItems = ({ name, onAddCategoryClick }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white m-2 flex items-center justify-center cursor-pointer"
      onClick={name ? null : onAddCategoryClick}
    >
      {name ? (
        <div className="font-bold text-xl">{name}</div>
      ) : (
        <div className="text-gray-400 text-4xl">+</div>
      )}
    </div>
  );
};

export default CategoryItems;

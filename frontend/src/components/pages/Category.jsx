import React, { useState } from "react";
import CategoryItems from "./../CategoryItems";
import AddCategoryModal from "./../AddCategoryModal";

const Category = () => {
  const [categories, setCategories] = useState([
    "Books",
    "Music",
    "Movies",
    "Games",
    "Technology",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCategoryClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {categories.map((category, index) => (
        <CategoryItems key={index} name={category} />
      ))}
      <CategoryItems name="" onAddCategoryClick={handleAddCategoryClick} />
      <AddCategoryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddCategory={handleAddCategory}
      />
    </div>
  );
};

export default Category;

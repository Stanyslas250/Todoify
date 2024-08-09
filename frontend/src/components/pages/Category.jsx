import React, { useEffect, useState } from "react";
import CategoryItems from "./../CategoryItems";
import AddCategoryModal from "./../AddCategoryModal";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/categories?skip=0&limit=100", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleAddCategoryClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddCategory = async (newCategory) => {
    await fetch("http://localhost:8000/api/v1/categories", {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newCategory }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories([...categories, data]);
      });
  };

  return (
    <div className="flex flex-wrap justify-center">
      {categories.map((categories, index) => (
        <CategoryItems key={index} name={categories.name} />
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

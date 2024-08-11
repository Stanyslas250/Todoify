import React, { useEffect, useState } from "react";
import CategoryItems from "../components/CategoryItems";
import AddCategoryModal from "../components/AddCategoryModal";
import { createCategory, loadCategories } from "../api/categorie";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch categories with useQuery
  const {
    data: fetchedCategories,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await loadCategories(),
  });

  const handleAddCategoryClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: createCategory,
    onSuccess: () => queryClient.invalidateQueries(["categories"]),
  });

  const handleAddCategory = async (newCategory) => {
    await mutateAsync(newCategory);
  };

  if (isLoading)
    return <span className="loading loading-ring loading-lg"></span>;
  return (
    <div>
      <div className="flex flex-wrap justify-center bg-base-100">
        {isSuccess &&
          fetchedCategories.map((categorie) => (
            <CategoryItems key={categorie.id} name={categorie.name} />
          ))}
        <CategoryItems name="" onAddCategoryClick={handleAddCategoryClick} />
        <AddCategoryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddCategory={handleAddCategory}
        />
      </div>
    </div>
  );
};

export default Category;

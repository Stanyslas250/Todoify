import React, { useState } from "react";

const AddCategoryModal = ({ isOpen, onClose, onAddCategory }) => {
  const [categoryName, setCategoryName] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (categoryName.trim()) {
      onAddCategory(categoryName);
      setCategoryName("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-base-100/30 flex items-center justify-center">
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Add New Category</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Category Name"
              className="input input-primary border-none rounded-lg w-full max-w-xs"
              required
            />
            <div className="card-actions justify-center">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-error btn-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;

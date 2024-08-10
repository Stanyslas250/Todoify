import React from "react";
import Category from "./components/pages/Category";
import Navbar from "./components/Navbar";


const categories = [];

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-6">Categories</h1>

      <Category categories={categories} />
    </div>
  );
};

export default App;

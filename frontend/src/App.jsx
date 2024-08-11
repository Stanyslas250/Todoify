import React from "react";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <Navbar />
      <h1 className="text-3xl font-bold text-center my-6">Categories</h1>
      <Category className="px-8" />
    </div>
  );
};

export default App;

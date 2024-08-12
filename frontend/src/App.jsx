import React, { Suspense } from "react";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";
import { Await, useLoaderData } from "react-router-dom";

const App = () => {
  const { username } = useLoaderData();
  console.log(username);
  return (
    <div className="bg-base-100 min-h-screen">
      <Suspense
        fallback={<span className="loading loading-ring loading-lg"></span>}
      >
        <Await resolve={username}>{() => <Navbar username={username} />}</Await>
      </Suspense>

      <h1 className="text-3xl font-bold text-center my-6">Categories</h1>
      <Category className="px-8" />
    </div>
  );
};

export default App;

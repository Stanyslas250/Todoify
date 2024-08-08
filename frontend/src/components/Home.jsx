import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to My Todo List App</h1>
        <div className="mt-4">
          <Link to="/login" className="btn btn-outline">
            Login
          </Link>
          <span className="mx-2">or</span>
          <Link to="/signin" className="btn btn-outline">
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

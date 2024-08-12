import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

export function SubCategory() {
  const name = useLoaderData();
  console.log(name);
  return (
    <div className="bg-white card">
      <div className="card-body">
        <Suspense
          fallback={<div className="loading loading-spinner loading-lg"></div>}
        >
          <Await resolve={name}>
            {() => <div className="card-title">Helloword {name}</div>}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

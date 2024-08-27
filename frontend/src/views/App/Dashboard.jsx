import TopbarSearch from "../../components/App/TopbarSearch";
import { useCategories } from "../../hooks/useCategory";
function Dashboard() {
  const { data: categories, isLoading, isError, error } = useCategories();
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-full">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  if (isError) return <div>{error.message}</div>;
  return (
    <div>
      <TopbarSearch />
      <div className="card bg-secondary">
        <div className="card-body">
          {categories.length} Project{categories.length > 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

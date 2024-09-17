import { LuFolderOpen } from "react-icons/lu";
import { useProjectCategories } from "../../../hooks/useProjectCategories";
const ProjectGrid = () => {
  const { categoriesWithColor, isFetching } = useProjectCategories();
  if (isFetching) {
    return (
      <div className="flex items-center justify-center size-full">
        <span className="loading loading-spinner text-primary" />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll sm:grid sm:grid-cols-4">
      {categoriesWithColor.map((category) => (
        <div
          key={category.id}
          className="cursor-pointer card bg-accent/10 hover:bg-accent/20"
        >
          <div className="flex-row card-body">
            <LuFolderOpen size={32} color={category.color} />
            <h2 className="card-title">{category.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;

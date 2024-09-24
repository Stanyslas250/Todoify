import { LuFolderOpen } from "react-icons/lu";
import { useProjectCategories } from "../../../hooks/useProjectCategories";

export default function ProjectList() {
  const { categoriesWithColor, isFetching } = useProjectCategories();

  if (isFetching) {
    return (
      <div className="flex items-center justify-center size-full">
        <span className="loading loading-spinner text-primary" />
      </div>
    );
  }

  return (
    <div>
      {categoriesWithColor.map((category) => (
        <div
          key={category.id}
          className="flex flex-row items-center gap-2 p-3 rounded-lg hover:bg-accent/10"
        >
          <LuFolderOpen size={24} color={category.color} />
          <h3 className="text-xl">{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

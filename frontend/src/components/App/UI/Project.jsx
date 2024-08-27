import { LuFolderOpen } from "react-icons/lu";
import { useCategories } from "../../../hooks/useCategory";
export default function Project() {
  const { data: categories } = useCategories();
  return (
    <div>
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-row items-center gap-2 p-3 rounded-lg hover:bg-accent/10"
        >
          <LuFolderOpen size={24} />{" "}
          <h3 className="text-xl">{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

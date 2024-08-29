import { LuFolderOpen } from "react-icons/lu";
import { useCategories } from "../../../hooks/useCategory";
import { colorUtils } from "../../../utils/colorUtils";

export default function ProjectList() {
  const { data: categories } = useCategories();
  return (
    <div>
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-row items-center gap-2 p-3 rounded-lg hover:bg-accent/10"
        >
          <LuFolderOpen
            size={24}
            color={colorUtils.getRandomColor(category.id)}
          />
          <h3 className="text-xl">{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

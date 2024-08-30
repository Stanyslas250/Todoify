import { LuFolderOpen } from "react-icons/lu";
import { colorUtils } from "../../../utils/colorUtils";

export default function ProjectList() {
  const categories = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
  ];
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

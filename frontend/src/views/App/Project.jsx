import ProjectViews from "../../components/App/ProjectViews/ProjectViews";
import ViewsChoose from "../../components/App/UI/ViewsChoose";
import { useState } from "react";
import { useCategory } from "../../hooks/useCategory";

export default function Project() {
  const [isGridView, setIsGridView] = useState(true);
  const handleToggleView = () => setIsGridView(!isGridView);

  const { countCategories } = useCategory();
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between pt-10">
        <h3 className="text-xl font-semibold">{countCategories} Projects</h3>
        <ViewsChoose isSwitch={!isGridView} onClick={handleToggleView} />
      </div>

      <div>
        <div className="divider" />
        <div>
          <ProjectViews isGridView={isGridView} />
        </div>
      </div>
    </div>
  );
}

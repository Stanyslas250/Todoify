import TopbarSearch from "../../components/App/TopbarSearch";
import ProjectViews from "../../components/App/ProjectViews/ProjectViews";
import ProjectList from "../../components/App/UI/ProjectList";
import ViewsChoose from "../../components/App/UI/ViewsChoose";
import { useState } from "react";
import { useCategory } from "../../hooks/useCategory";

export default function Project() {
  // State pour la vue (grille ou liste)
  const [isGridView, setIsGridView] = useState(false);
  const handleToggleView = () => setIsGridView(!isGridView);

  const { countCategories } = useCategory();
  return (
    <div className="flex flex-col">
      <TopbarSearch />
      <div className="flex flex-row justify-between pt-10">
        <h3 className="text-xl font-semibold">{countCategories} Projects</h3>
        <ViewsChoose isSwitch={!isGridView} onClick={handleToggleView} />
      </div>

      <div>
        <div className="divider" />
        <div>
          <ProjectViews isGridView={isGridView}>
            <ProjectList />
          </ProjectViews>
        </div>
      </div>
    </div>
  );
}

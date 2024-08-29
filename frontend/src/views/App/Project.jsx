import { LuFolderArchive } from "react-icons/lu";
import TopbarSearch from "../../components/App/TopbarSearch";

export default function Project() {
  return (
    <div className="flex flex-col">
      <TopbarSearch />
      <div className="flex flex-row justify-between pt-10">
        <h3 className="text-xl font-semibold">10 Projects</h3>
      </div>
      <div>
        <div className="divider" />
        <div>
          <div className="flex flex-row items-center gap-2">
            <LuFolderArchive />
            <h6>Project Name</h6>
          </div>
          <div>
            <p>Number of task - Tasks</p>
            <span>On Process</span>
          </div>
        </div>
      </div>
    </div>
  );
}

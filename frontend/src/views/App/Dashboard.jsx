import { LuClipboardCheck, LuFolders, LuListTodo } from "react-icons/lu";
import TopbarSearch from "../../components/App/TopbarSearch";
import Card from "../../components/App/UI/Card";
import BentoElement from "../../components/App/UI/BentoElement";
import Task from "../../components/App/UI/TaskList";
import ProjectList from "../../components/App/UI/ProjectList";
import { useCategory } from "../../hooks/useCategory";
import { useTasks } from "../../hooks/useTask";
function Dashboard() {
  const { completedTasks, incompleteTasks } = useTasks();
  const { countCategories } = useCategory();
  return (
    <div className="flex flex-col gap-10">
      <TopbarSearch />
      <div className="grid gap-3 md:grid-flow-col justify-stretch">
        <Card
          data={countCategories}
          title={`Project${countCategories > 1 ? "s" : ""}`}
          subtitle={"Total Projects"}
          className="rounded-md"
        >
          <LuFolders size={32} />
        </Card>
        <Card
          data={incompleteTasks.length}
          title={`Task${incompleteTasks.length > 1 ? "s" : ""}`}
          subtitle={"On Progress"}
          className="rounded-md"
        >
          <LuListTodo size={32} />
        </Card>
        <Card
          data={completedTasks.length}
          title={`Task${completedTasks.length > 1 ? "s" : ""}`}
          subtitle={"Completed Tasks"}
          className="rounded-md"
        >
          <LuClipboardCheck size={32} />
        </Card>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        <BentoElement
          className="border-2 md:w-3/5 border-primary"
          title={"My Tasks"}
          filter
        >
          <Task />
        </BentoElement>
        <BentoElement
          className="border-2 md:w-2/5 border-primary"
          title={"My Projects"}
        >
          <ProjectList />
        </BentoElement>
      </div>
    </div>
  );
}

export default Dashboard;

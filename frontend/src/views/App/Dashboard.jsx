import { LuClipboardCheck, LuFolders, LuListTodo } from "react-icons/lu";
import TopbarSearch from "../../components/App/TopbarSearch";
import Card from "../../components/App/UI/Card";
import { useCategories } from "../../hooks/useCategory";
import { useTaskStats } from "../../hooks/useTaskStats";
import BentoElement from "../../components/App/UI/BentoElement";
import Task from "../../components/App/UI/Task";
import ProjectList from "../../components/App/UI/ProjectList";
function Dashboard() {
  const { data: categories, isLoading, isError, error } = useCategories();
  const { completedTasks, incompleteTasks } = useTaskStats();

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-full">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  if (isError)
    return (
      <div className="flex items-center justify-center h-full text-center">
        {error.message}
      </div>
    );
  return (
    <div className="flex flex-col gap-10">
      <TopbarSearch />
      <div className="grid gap-3 md:grid-flow-col justify-stretch">
        <Card
          data={categories.length}
          title={`Project${categories.length > 1 ? "s" : ""}`}
          subtitle={"Total Projects"}
          className="rounded-md"
        >
          <LuFolders size={32} />
        </Card>
        <Card
          data={incompleteTasks}
          title={`Task${incompleteTasks > 1 ? "s" : ""}`}
          subtitle={"On Progress"}
          className="rounded-md"
        >
          <LuListTodo size={32} />
        </Card>
        <Card
          data={completedTasks}
          title={`Task${incompleteTasks > 1 ? "s" : ""}`}
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

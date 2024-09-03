/**
 * This component represents the dashboard page.
 * It displays the total number of projects, tasks, and completed tasks
 * in the dashboard.
 */

import { LuClipboardCheck, LuFolders, LuListTodo } from "react-icons/lu";

import { useCategory } from "../../hooks/useCategory";
import { useTasks } from "../../hooks/useTask";

import TopbarSearch from "../../components/App/TopbarSearch";
import Card from "../../components/App/UI/Card";
import BentoElement from "../../components/App/UI/BentoElement";
import TaskBento from "../../components/App/TaskBento";
import ProjectList from "../../components/App/UI/ProjectList";
import TaskModal from "../../components/App/modal/TaskModal";
import ProjectModal from "../../components/App/modal/ProjectModal";

function Dashboard() {
  const { completedTasks, incompleteTasks } = useTasks();
  const { countCategories, categoriesWithColor } = useCategory();
  return (
    <div className="flex flex-col gap-10">
      <TopbarSearch />
      <div className="grid gap-3 md:grid-flow-col justify-stretch">
        <Card
          data={countCategories}
          title={`Project${countCategories > 1 ? "s" : ""}`}
          subtitle={"Total Projects"}
          className="rounded-md"
          onClick={() => document.getElementById("projectList").showModal()}
        >
          <ProjectModal
            projectID="projectList"
            projectsList={categoriesWithColor}
          />
          <LuFolders size={32} />
        </Card>
        <Card
          data={incompleteTasks.length}
          title={`Task${incompleteTasks.length > 1 ? "s" : ""}`}
          onClick={() => document.getElementById("incompleteTasks").showModal()}
          subtitle={"On Progress"}
          className="rounded-md"
        >
          <TaskModal tasksList={incompleteTasks} taskID="incompleteTasks" />
          <LuListTodo size={32} />
        </Card>
        <Card
          data={completedTasks.length}
          title={`Task${completedTasks.length > 1 ? "s" : ""}`}
          subtitle={"Completed Tasks"}
          className="rounded-md"
          onClick={() => document.getElementById("completedTasks").showModal()}
        >
          <TaskModal tasksList={completedTasks} taskID="completedTasks" />
          <LuClipboardCheck size={32} />
        </Card>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        <BentoElement
          className="border-2 md:w-3/5 border-primary"
          title={"My Tasks"}
          filter
        >
          <TaskBento />
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

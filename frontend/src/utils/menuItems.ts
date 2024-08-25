// src/config/menuItems.ts
import { IconType } from "react-icons";
import {
  LuLayoutDashboard,
  LuFolderMinus,
  LuClipboardList,
  LuCalendarClock,
} from "react-icons/lu";

export type Section = "dashboard" | "projects" | "tasks" | "schedule";

interface MenuItem {
  id: string;
  title: string;
  icon: IconType;
}

export const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: LuLayoutDashboard,
  },
  {
    id: "projects",
    title: "My Projects",
    icon: LuFolderMinus,
  },
  {
    id: "tasks",
    title: "My Tasks",
    icon: LuClipboardList,
  },
  {
    id: "schedule",
    title: "Schedule",
    icon: LuCalendarClock,
  },
];

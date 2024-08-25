/**
 * Custom React hook for managing the state of a drawer.
 * The drawer is initially open.
 *
 * @returns {Object} An object containing the state of the drawer and a function to toggle the drawer state.
 */

import { useState } from "react";
import { Section } from "../utils/menuItems";

function useDrawer() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>("dashboard");

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const changeSection = (section: Section) => {
    setActiveSection(section);
  };

  return {
    isOpen,
    toggleDrawer,
    changeSection,
  };
}

export default useDrawer;

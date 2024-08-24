/**
 * Custom React hook for managing the state of a drawer.
 * The drawer is initially open.
 *
 * @returns {Object} An object containing the state of the drawer and a function to toggle the drawer state.
 */

import { useState } from "react";

function useDrawer() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleDrawer,
  };
}

export default useDrawer;

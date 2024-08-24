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

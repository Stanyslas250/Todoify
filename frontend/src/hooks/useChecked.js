import { useState } from "react";

export const useChecked = () => {
  const [check, setCheck] = useState(false);
  const handleToggle = () => setCheck(!check);

  return { check, handleToggle };
};

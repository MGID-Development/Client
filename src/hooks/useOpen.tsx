import { useState } from "react";

const useOpen = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return { isOpen, open: handleOpen, close: handleClose, toggle: handleToggle };
};

export default useOpen;

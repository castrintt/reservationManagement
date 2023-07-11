import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseHomeController = () => {
  const [openModal, setOpenModal] = useState(true);
  const navigate = useNavigate();

  const openCloseDrawer = () => {
    setOpenModal(!openModal);
  };

  return {
    Actions: {
      onOpenCloseDrawer: openCloseDrawer,
      onNavigate: navigate,
    },
    States: {
      drawerIsOpen: openModal,
    },
  };
};

export default UseHomeController;

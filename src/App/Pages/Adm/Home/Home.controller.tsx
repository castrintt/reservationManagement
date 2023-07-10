import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseHomeController = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const openCloseModal = () => {
    setOpenModal(!openModal);
  };

  return {
    Actions: {
      onOpenCloseModal: openCloseModal,
      onNavigate: navigate,
    },
  };
};

export default UseHomeController;

import { useState } from "react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { GiBeerStein } from "react-icons/gi";
import { BiCog } from "react-icons/bi";

type SidebarProperties = {
  isOpen: boolean;
  selected: boolean;
  action: () => void;
  icon: IconType;
  text: string;
};

const UseHomeController = () => {
  const [openModal, setOpenModal] = useState(true);
  const navigate = useNavigate();

  const sidebarProperties: SidebarProperties[] = [
    {
      isOpen: openModal,
      selected: true,
      action: () => navigate("/login"),
      icon: AiFillHome,
      text: "Home",
    },
    {
      isOpen: openModal,
      selected: false,
      action: () => navigate("/login"),
      icon: GiBeerStein,
      text: "Reservas",
    },
    {
      isOpen: openModal,
      selected: false,
      action: () => navigate("/login"),
      icon: RxDashboard,
      text: "Dashboard",
    },
    {
      isOpen: openModal,
      selected: false,
      action: () => navigate("/login"),
      icon: BiCog,
      text: "Configurações",
    },
  ];

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
      sidebarProperties,
    },
  };
};

export default UseHomeController;

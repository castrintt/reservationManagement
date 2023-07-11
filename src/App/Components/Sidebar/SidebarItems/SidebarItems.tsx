import React from "react";
import { Item } from "./SidebarItems.style";
import { IconType } from "react-icons";

type SidebarItemsProps = {
  isOpen: boolean;
  selected: boolean;
  action: () => void;
  icon: IconType;
  text: string;
};

const SidebarItems = ({
  icon: Icon,
  text,
  isOpen,
  selected,
  action,
}: SidebarItemsProps) => {
  return (
    <Item selected={selected} onClick={action}>
      <Icon />
      {isOpen && <span>{text}</span>}
    </Item>
  );
};

export default SidebarItems;

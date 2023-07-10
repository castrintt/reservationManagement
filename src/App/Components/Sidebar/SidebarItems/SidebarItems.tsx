import React from "react";
import { ItemsContainer } from "./SidebarItems.style";

type SidebarItemsProps = {
  children: React.ReactNode;
  action: () => void;
};

const SidebarItems = ({ children, action }: SidebarItemsProps) => {
  return (
    <ItemsContainer onClick={action}>
      <div>{children}</div>
    </ItemsContainer>
  );
};

export default SidebarItems;

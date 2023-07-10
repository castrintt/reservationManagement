import React from "react";
import { Sidebar } from "../Sidebar";
import { IconType } from "react-icons";
import { HeaderContainer } from "./SidebarHeader.style";

type SidebarHeaderProps = {
  icon: IconType;
  text: string;
  action: () => void;
};

const SidebarHeader = ({ icon: Icon, text, action }: SidebarHeaderProps) => {
  return (
    <HeaderContainer onClick={action}>
      <div>
        <Sidebar.Icon icon={Icon} />
        <Sidebar.Text text={text} />
      </div>
    </HeaderContainer>
  );
};

export default SidebarHeader;

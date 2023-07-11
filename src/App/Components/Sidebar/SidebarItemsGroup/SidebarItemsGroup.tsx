import React from "react";
import { GroupContainer, Header } from "./SidebarItemsGroup.style";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  children: React.ReactNode;
  action: () => void;
};

const SidebarItemsGroup = ({ children, action }: Props) => {
  return (
    <GroupContainer>
      <Header onClick={action}>
        <GiHamburgerMenu />
      </Header>
      {children}
    </GroupContainer>
  );
};

export default SidebarItemsGroup;

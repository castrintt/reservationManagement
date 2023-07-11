import React from "react";
import { Container } from "./SidebarContainer.style";

type SidebarContainerProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

const SidebarContainer = ({ children, isOpen }: SidebarContainerProps) => {
  return <Container isOpen={isOpen}>{children}</Container>;
};

export default SidebarContainer;

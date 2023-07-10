import React from "react";
import { SideContainer } from "./SidebarContainer.style";

type SidebarContainerProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const SidebarContainer = ({ isOpen, children }: SidebarContainerProps) => {
  return <SideContainer isOpen={isOpen}>{children}</SideContainer>;
};

export default SidebarContainer;

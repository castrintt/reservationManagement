import React from "react";
import { FooterContainer } from "./SidebarFooter.style";

type SidebarFooterProps = {
  children: React.ReactNode;
  action: () => void;
};

const SidebarFooter = ({ children, action }: SidebarFooterProps) => {
  return (
    <FooterContainer onClick={action}>
      <div>{children}</div>
    </FooterContainer>
  );
};

export default SidebarFooter;

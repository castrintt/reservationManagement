import React from "react";
import { FooterContainer } from "./SidebarFooter.style";
import { BiLogOut } from "react-icons/bi";

const SidebarFooter = () => {
  return (
    <FooterContainer>
      <div>
        <BiLogOut />
      </div>
    </FooterContainer>
  );
};

export default SidebarFooter;

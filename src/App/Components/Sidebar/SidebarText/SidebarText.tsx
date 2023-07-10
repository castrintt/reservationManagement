import React from "react";
import { TextContainer } from "./SidebarText.style";

type SidebarTextProps = {
  text: string;
};

const SidebarText = ({ text }: SidebarTextProps) => {
  return <TextContainer>{text}</TextContainer>;
};

export default SidebarText;

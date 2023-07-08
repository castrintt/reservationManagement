import React from "react";
import { IconType } from "react-icons";
import { IconContainer } from "./ButtonIcon.style";

type ButtonIconProps = {
  icon: IconType;
};

const ButtonIcon = ({ icon: Icon }: ButtonIconProps) => {
  return (
    <IconContainer>
      <Icon />
    </IconContainer>
  );
};

export default ButtonIcon;

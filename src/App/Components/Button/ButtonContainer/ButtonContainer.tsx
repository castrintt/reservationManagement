import React, { ButtonHTMLAttributes } from "react";
import {
  DefaultButton,
  DangerButton,
  DisabledButton,
  ActiveButton,
  AttentionButton,
} from "./ButtonContainer.style";
import { Colors } from "../../../Global/rootStyles";

type Props = {
  children: React.ReactNode;
  variant: keyof typeof Colors;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type SelectedButton = {
  [key in Props["variant"]]: JSX.Element;
};

const ButtonContainer = ({ children, variant, ...rest }: Props) => {
  const selectedButton: SelectedButton = {
    default: <DefaultButton {...rest}>{children}</DefaultButton>,
    danger: <DangerButton {...rest}>{children}</DangerButton>,
    disabled: <DisabledButton {...rest}>{children}</DisabledButton>,
    active: <ActiveButton {...rest}>{children}</ActiveButton>,
    attention: <AttentionButton {...rest}>{children}</AttentionButton>,
  };

  return <>{selectedButton[variant]}</>;
};

export default ButtonContainer;

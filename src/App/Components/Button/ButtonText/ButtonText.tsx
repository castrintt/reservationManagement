import React from "react";
import { TextContainer } from "./ButtonText.style";

type Props = {
  text: string;
};

const ButtonText = ({ text }: Props) => {
  return <TextContainer>{text}</TextContainer>;
};

export default ButtonText;

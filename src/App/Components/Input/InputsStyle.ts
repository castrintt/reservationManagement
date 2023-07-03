import { Colors, DefaultBorderRadius } from "../../Global/rootStyles";
import { styled } from "styled-components";

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding-block: .6rem;
  padding-left: 0.5rem;
  font-size: 1.2rem;
  border-radius: ${DefaultBorderRadius};
  border: 1px solid ${Colors.disabled};
  outline: none;
  &:focus {
    border: 2px solid ${Colors.disabled};
    outline: none;
  }
`;

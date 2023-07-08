import { DefaultBorderRadius, Colors } from "../../../Global/rootStyles";
import { styled } from "styled-components";

const CommonProperties = ` 
  width: 100%;
  border-radius: ${DefaultBorderRadius};
  border: none;
  outline: none;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;`;

export const DefaultButton = styled.button`
  ${CommonProperties}
  background-color: ${Colors.default};
`;
export const DangerButton = styled.button`
  ${CommonProperties}
  background-color: ${Colors.danger};
`;
export const DisabledButton = styled.button`
  ${CommonProperties}
  background-color: ${Colors.disabled};
`;
export const ActiveButton = styled.button`
  ${CommonProperties}
  background-color: ${Colors.active};
`;
export const AttentionButton = styled.button`
  ${CommonProperties}
  background-color: ${Colors.attention};
`;

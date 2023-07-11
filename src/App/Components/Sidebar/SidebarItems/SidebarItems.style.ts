import { styled } from "styled-components";
import { Colors } from "@globals/rootStyles";

export const Item = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) =>
    selected ? Colors.attention : "transparent"};
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    background-color: ${Colors.attention};
    transition-duration: 0.5s;
    svg {
      color: white;
    }
    span {
      color: white;
    }
  }

  border-radius: 0.5rem;
  svg {
    font-size: 1.4rem;
    color: ${({ selected }) => (selected ? "white" : "black")};
  }

  span {
    font-weight: bold;
    font-size: 0.9rem;
    color: ${({ selected }) => (selected ? "white" : "black")};
  }
`;

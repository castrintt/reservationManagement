import { styled } from "styled-components";
import { Colors } from "@globals/rootStyles";

export const Item = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) =>
    selected ? Colors.attention : "transparent"};
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
  transition-duration: 0.5s;
  border-radius: 0.5rem;

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

  svg {
    font-size: 1.4rem;
    color: ${({ selected }) => (selected ? "white" : "black")};
    position: relative;
    left: .8rem;
  }

  span {
    font-weight: bold;
    font-size: 0.9rem;
    color: ${({ selected }) => (selected ? "white" : "black")};
    position: relative;
    left: .8rem;
  }
`;

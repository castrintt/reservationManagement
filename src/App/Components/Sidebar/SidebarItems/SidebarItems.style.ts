import { styled } from "styled-components";

export const ItemsContainer = styled.div`
  width: 100%;
  height: 4rem;
  cursor: pointer;

  div {
    padding-inline: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    height: 100%;
  }

  &:hover {
    background-color: rgba(255, 115, 0, 0.836);
    svg {
      color: white;
    }
    span {
      color: white;
    }
  }
`;

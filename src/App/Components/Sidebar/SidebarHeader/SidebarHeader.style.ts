import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    height: 100%;
    width: 80%;
  }

  div:last-of-type {
    border-bottom: 1px solid rgba(128, 128, 128, 0.349);
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

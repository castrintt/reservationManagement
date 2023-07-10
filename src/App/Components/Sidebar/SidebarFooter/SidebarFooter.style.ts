import { styled } from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  div {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 115, 0, 0.836);
      svg {
        color: white;
      }
      span {
        color: white;
      }
    }
  }
`;

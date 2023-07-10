import { styled } from "styled-components";

export const SideContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "13rem" : "4rem")};
  background-color: white;
  box-shadow: 3px 8px 8px rgba(0, 0, 0, 0.479);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  span {
    display:${({isOpen}) => (isOpen ? 'block' : 'none')}
  }
`;

import { styled } from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: ${({ isOpen }) => (isOpen ? "12rem" : "3rem")};
  height: 100vh;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 2px 0 5px orange;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  transition-duration: 0.2s;
`;

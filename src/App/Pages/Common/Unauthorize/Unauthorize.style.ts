import {
  Colors,
  DefaultBorderRadius,
  DefaultBoxShadow,
} from "../../../Global/rootStyles";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  width: 40%;
  height: 40%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  svg {
    font-size: 8rem;
    color: ${Colors.danger} !important;
  }
  border-radius: ${DefaultBorderRadius};
  box-shadow: ${DefaultBoxShadow};
`;

export { Container, Content };

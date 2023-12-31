import { styled } from "styled-components";
import { Colors, DefaultBorderRadius } from "@globals/rootStyles";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.default};
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  border-radius: ${DefaultBorderRadius};
  width: 80%;
  height: 80%;
  background-color: white;

  @media all and (min-width: 780px) {
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
  @media all and (min-width: 920px) {
    width: 60%;
    height: 80%;
  }
  @media all and (min-width: 1100px) {
    width: 50%;
    height: 80%;
  }
  @media all and (min-width: 1240px) {
    // box-shadow: 0px 0px 20px 20px ${Colors.attention};
    width: 80%;
    height: 80%;
  }
`;

export const VideoContainer = styled.div`
  display: none;
  @media all and (min-width: 1240px) {
    display: block;
    width: 50%;
    height: 100%;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-right-radius: ${DefaultBorderRadius};
      border-bottom-right-radius: ${DefaultBorderRadius};
    }
  }
`;
export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  @media all and (min-width: 1240px) {
    width: 50%;
    height: 100%;
  }
`;

export const FormHeader = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  max-width: 90%;
  width: 100%;
`;

export const FormLabel = styled.label`
  max-width: 90%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  span {
    font-size: .9rem;
    font-weight: normal;
  }
`;

export const NavigateToRegisterSection = styled.section`
  margin-top: 1rem;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  a {
    text-style: none;
    font-size: .9rem;
    color: ${Colors.default};
  }
  span {
    font-size: .9rem;
  }
`;

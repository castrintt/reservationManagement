import React from "react";
import { IoIosAlert } from "react-icons/io";
import { Container, Content } from "./Unauthorize.style";

const Unauthorize = () => {
  return (
    <Container>
      <Content>
        <IoIosAlert />
        <h1>Sem acesso!</h1>
      </Content>
    </Container>
  );
};

export default Unauthorize;

import React from "react";
import { Container, Content } from "./NotFound.style";
import { MdDangerous } from "react-icons/md";

const NotFound = () => {
  return (
    <Container>
      <Content>
        <MdDangerous />
      </Content>
    </Container>
  );
};

export default NotFound;

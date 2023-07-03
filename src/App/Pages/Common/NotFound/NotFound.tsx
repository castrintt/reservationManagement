import React from "react";
import { Container, Content } from "./NotFoundStyles";
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

import React from "react";
import CheersLoading from "../../Assets/cheers.gif";
import { Container, Spinner } from "./Loading.style";

const Loading = () => {
  return (
    <Container>
      <Spinner src={CheersLoading} />
    </Container>
  );
};

export default Loading;

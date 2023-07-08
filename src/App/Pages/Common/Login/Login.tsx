import {
  Container,
  ImageContainer,
  Content,
  FormContainer,
  FormLabel,
  FormHeader,
  NavigateToRegisterSection,
} from "./Login.style";
import { Button } from "@components/Button/Button";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import UseLoginController from "./Login.controller";

const Login = () => {
  const { Actions, Register, States } = UseLoginController();

  return (
    <Container>
      <Content>
        <ImageContainer />
        <FormContainer onSubmit={Actions.onSubmit}>
          <FormHeader>Login</FormHeader>
          <FormLabel>
            <span>Email: </span>
            <input
              {...Register.input("email")}
              {...{ required: true }}
              type="text"
            />
          </FormLabel>
          <FormLabel>
            <span>Senha: </span>
            <input
              {...Register.input("password")}
              {...{ required: true }}
              type="password"
            />
          </FormLabel>
          <FormLabel>
            <Button.Container type="submit" variant="default">
              <Button.Text text="login" />
            </Button.Container>
          </FormLabel>
          <FormLabel>
            <Button.Container type="submit" variant="attention">
              <Button.Icon icon={BsGoogle} />
              <Button.Text text="google" />
            </Button.Container>
          </FormLabel>
          <NavigateToRegisterSection>
            <span>Ainda não possui uma conta? </span>
            <Link to="/register">registre-se</Link>
          </NavigateToRegisterSection>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Login;

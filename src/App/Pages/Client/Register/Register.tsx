import Container from "@components/Container/Container";
import UseRegisterController from "./Register.controller";
import {
  Content,
  VideoContainer,
  FormContainer,
  FormHeader,
  FormLabel,
  NavigateToRegisterSection,
} from "./Register.style";
import { Button } from "@components/Button/Button";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import OpenBeerVideo from "@assets/bottle-beer.mp4";

const Register = () => {
  const { Actions, Helpers } = UseRegisterController();

  return (
    <Container>
      <Content>
        <VideoContainer>
          <video autoPlay loop muted preload="metadata">
            <source src={OpenBeerVideo} type="video/mp4" />
          </video>
        </VideoContainer>
        <FormContainer onSubmit={Actions.onSubmit}>
          <FormHeader>Registro</FormHeader>
          <FormLabel>
            <span>Nome: </span>
            <input {...Helpers.registerInput("name")} type="text" />
          </FormLabel>
          <FormLabel>
            <span>Email: *</span>
            <input
              {...Helpers.registerInput("email")}
              {...{ required: true }}
              type="email"
            />
          </FormLabel>
          <FormLabel>
            <span>Celular: *</span>
            <InputMask
              type="tel"
              {...Helpers.registerInput("phone")}
              {...{ required: true }}
              mask={Helpers.masks.phone}
            />
          </FormLabel>
          <FormLabel>
            <span>Senha: *</span>
            <input
              {...Helpers.registerInput("password")}
              {...{ required: true }}
              type="password"
            />
          </FormLabel>
          <FormLabel>
            <span>Confirme a senha: *</span>
            <input
              {...Helpers.registerInput("confirmPassword")}
              {...{ required: true }}
              type="password"
            />
          </FormLabel>
          <FormLabel>
            <Button.Container type="submit" variant="default">
              <Button.Text text="registrar" />
            </Button.Container>
          </FormLabel>
          <NavigateToRegisterSection>
            <span>Já possui uma conta? </span>
            <Link to="/">Faça login</Link>
          </NavigateToRegisterSection>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Register;

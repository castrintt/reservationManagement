import Inputs from "../../../Components/Input/Inputs";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Container,
  ImageContainer,
  Content,
  FormContainer,
  FormLabel,
  FormHeader,
  NavigateToRegisterSection,
} from "./LoginStyles";
import { Button } from "../../../Components/Button/Button";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

type IForms = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<IForms>();

  const onSubmit: SubmitHandler<IForms> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <ImageContainer />
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <FormHeader>Login</FormHeader>
          <FormLabel>
            <span>Email: </span>
            <Inputs
              {...register("email")}
              {...{ required: true }}
              type="text"
            />
          </FormLabel>
          <FormLabel>
            <span>Senha: </span>
            <Inputs
              {...register("password")}
              {...{ required: true }}
              type="password"
            />
          </FormLabel>
          <FormLabel>
            <Button.Container
              type="submit"
              onClick={() => console.log("")}
              variant="default"
            >
              <Button.Text text="login" />
            </Button.Container>
          </FormLabel>
          <FormLabel>
            <Button.Container
              type="submit"
              onClick={() => console.log("")}
              variant="attention"
            >
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

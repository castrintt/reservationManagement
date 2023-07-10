import { useForm, SubmitHandler } from "react-hook-form";

type RegisterFormValues = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  phone: string;
};

const UseRegisterController = () => {
  const { register, handleSubmit } = useForm<RegisterFormValues>();
  const phonePattern = "+55 (99) 9 9999-9999";

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log(data);
  };

  return {
    Actions: {
      onSubmit: handleSubmit(onSubmit),
    },
    Helpers: {
      registerInput: register,
      masks: {
        phone: phonePattern,
      },
    },
  };
};

export default UseRegisterController;

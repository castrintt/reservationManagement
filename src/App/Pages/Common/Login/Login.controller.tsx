import { useForm, SubmitHandler } from "react-hook-form";
import { callToast } from "@utils/toastCall";

type ILogin = {
  email: string;
  password: string;
};

const UseLoginController = () => {
  const { register, handleSubmit, watch } = useForm<ILogin>();

  const formValidation = (data: ILogin) => {
    if (!data.email) {
      callToast("Por favor insira um email!", "warning");
    }
    if (!data.password) {
      callToast("Por favor insira uma senha!", "warning");
    }
  };

  const submitHandler: SubmitHandler<ILogin> = (data) => {
    formValidation(data);
  };

  return {
    Actions: {
      onSubmit: handleSubmit(submitHandler),
    },
    States: {
      input: watch,
    },
    Register: {
      input: register,
    },
  };
};

export default UseLoginController;

import { Container as ContainerStyle } from "./Container.style";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;

import { Container as ContainerStyle } from "./Container.style";

type Props = {
  children: React.ReactNode;
};

const DefaultContainer = ({ children }: Props) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default DefaultContainer;

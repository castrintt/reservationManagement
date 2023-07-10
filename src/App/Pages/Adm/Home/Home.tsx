import DefaultContainer from "@components/Container/Container";
import UseHomeController from "./Home.controller";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { FaBeer } from "react-icons/fa";

const Home = () => {
  const { Actions } = UseHomeController();
  return (
    <DefaultContainer>
      <Sidebar.Container isOpen={false}>
        <Sidebar.Header
          action={Actions.onOpenCloseModal}
          icon={FaBeer}
          text="Barril Reservas"
        />
        <Sidebar.Item
          action={() => {
            console.log("");
          }}
        >
          <Sidebar.Icon icon={FaBeer} />
          <Sidebar.Text text="Home" />
        </Sidebar.Item>
        <Sidebar.Item
          action={() => {
            console.log("");
          }}
        >
          <Sidebar.Icon icon={FaBeer} />
          <Sidebar.Text text="test" />
        </Sidebar.Item>
        <Sidebar.Item
          action={() => {
            console.log("");
          }}
        >
          <Sidebar.Icon icon={FaBeer} />
          <Sidebar.Text text="test" />
        </Sidebar.Item>
        <Sidebar.Footer action={() => Actions.onNavigate("/")}>
          <Sidebar.Icon icon={FaBeer} />
          <Sidebar.Text text="test" />
        </Sidebar.Footer>
      </Sidebar.Container>
    </DefaultContainer>
  );
};

export default Home;

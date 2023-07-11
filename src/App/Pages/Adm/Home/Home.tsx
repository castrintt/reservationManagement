import DefaultContainer from "@components/Container/Container";
import UseHomeController from "./Home.controller";
import { FaBeer } from "react-icons/fa";
import { Sidebar } from "@components/Sidebar/Sidebar";

const Home = () => {
  const { Actions, States } = UseHomeController();
  return (
    <DefaultContainer>
      <Sidebar.Container isOpen={States.drawerIsOpen}>
        <Sidebar.HeaderGroup action={Actions.onOpenCloseDrawer}>
          <Sidebar.Item
            isOpen={States.drawerIsOpen}
            selected={false}
            action={() => console.log('')}
            icon={FaBeer}
            text="Teste"
          />
          <Sidebar.Item
            isOpen={States.drawerIsOpen}
            selected={false}
            action={() => console.log('')}
            icon={FaBeer}
            text="Teste"
          />
          <Sidebar.Item
            isOpen={States.drawerIsOpen}
            selected={false}
            action={() => console.log('')}
            icon={FaBeer}
            text="Teste"
          />
        </Sidebar.HeaderGroup>
        <Sidebar.Footer />
      </Sidebar.Container>
    </DefaultContainer>
  );
};

export default Home;

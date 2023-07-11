import React from "react";
import DefaultContainer from "@components/Container/Container";
import UseHomeController from "./Home.controller";
import { Sidebar } from "@components/Sidebar/Sidebar";

const Home = () => {
  const { Actions, States } = UseHomeController();
  return (
    <DefaultContainer>
      <Sidebar.Container isOpen={States.drawerIsOpen}>
        <Sidebar.HeaderGroup action={Actions.onOpenCloseDrawer}>
          {States.sidebarProperties.map((properties, index) => (
            <React.Fragment key={index}>
              <Sidebar.Item {...properties} />
            </React.Fragment>
          ))}
        </Sidebar.HeaderGroup>
        <Sidebar.Footer />
      </Sidebar.Container>
    </DefaultContainer>
  );
};

export default Home;

import {
  Container,
  Content,
  Header,
} from "native-base";
import React, { useState } from "react";
import TopBar from "../components/atoms/topbar";

export default Favorite = ({ navigation }) => {
  const [activePage, setActivePage] = useState("User");

  const onClickNavigateFilters = () => {
    navigation.navigate("Filters", {
      screen: "Filters",
    });
  };

  return (
    <Container>
      <Header>
        <TopBar
          title="Fymate"
          onClickRightIcon={onClickNavigateFilters}
          rightIcon="filter"
        />
      </Header>
      <Content>
        {activePage === "Users" ? <UsersList/> : <CompanyList/> }
        
      </Content>
    </Container>
  );
};


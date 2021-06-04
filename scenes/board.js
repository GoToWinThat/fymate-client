import React from "react";
import { Container, Header, Content } from "native-base";
import TopBar from "../components/atoms/topbar";
import Searchbar from "../components/atoms/searchbar";
import OfferList from "../components/molecules/offerlist";

export default Board = ({ navigation }) => {

  const accountType = "Company"; //Employee , Company

  const companyList = [
    {
      id: 0,
      title: "Java Developer",
      location: "Berlin",
      payment: "5000 - 6000 EUR",
      company: "Ubisoft",
      url: "https://www.gry-online.pl/galeria/kontakty/344743037.png",
    },
    {
      id: 1,
      title: "Python Developer",
      location: "Paris",
      payment: "5000 - 8000 EUR",
      company: "Microsoft",
      url: "https://cloudwize.co.za/wp-content/uploads/2019/03/new-microsoft-logo-SIZED-SQUARE.jpg",
    },
    {
      id: 2,
      title: "Front End Dev",
      location: "New York",
      payment: "9000 - 14000 USD",
      company: "Google",
      url: "https://bookassist.org/wp-content/uploads/elementor/thumbs/google_3_520-oc7dqerwmsbfad0t1gveosa6x2uck2bd7y6l2r7txs.jpg",
    },
    {
      id: 3,
      title: "Back End Dev",
      location: "California",
      payment: "8000 - 11000 USD",
      company: "Facebook",
      url: "https://i.pinimg.com/736x/ac/57/3b/ac573b439cde3dec8ca1c6739ae7f628.jpg",
    },
    {
      id: 4,
      title: "Student",
      location: "Nigeria",
      payment: "100 - 200 USD",
      company: "Amazon",
      url: "https://s.clipartkey.com/mpngs/s/147-1478713_amazon-logo-png-amazon-logo.png",
    },
  ];

  const userList = [
    {
      id: 0,
      title: "Java Developer",
      location: "Berlin",
      payment: "5000 - 6000 EUR",
      url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
    },
    {
      id: 1,
      title: "Python Developer",
      location: "Paris",
      payment: "5000 - 8000 EUR",
      url: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
    },
    {
      id: 2,
      title: "Front End Dev",
      location: "New York",
      payment: "9000 - 14000 USD",
      url: "https://freelancersinternational.com/wp-content/uploads/2020/11/webguru.jpg",
      time: "Full",
    },
    {
      id: 3,
      title: "Back End Dev",
      location: "California",
      payment: "8000 - 11000 USD",
      url: "https://bestprofilepix.com/wp-content/uploads/2014/03/cute-stylish-winter-girls-facebook-profile-pictures.jpg",
    },
    {
      id: 4,
      title: "Student",
      location: "Nigeria",
      payment: "100 - 200 USD",
      url: "https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png",
      time: "1/4",
    },
  ];

  const onClickNavigateFilters = () => {
    navigation.navigate("Filters", {
      screen: "Filters",
    });
  };

  const onClickNavigateOffer = () => {
    navigation.navigate("Offert", {
      screen: "Offert",
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
      <Searchbar />

      <Content>
        {accountType === "Company" ? (
          <OfferList onClick={onClickNavigateOffer} list={userList} />
        ) : (
          <OfferList onClick={onClickNavigateOffer} list={companyList} />
        )}
      </Content>
    </Container>
  );
};

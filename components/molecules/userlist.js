import React from "react";
import {
  Body,
  Button,
  Container,
  Left,
  Right,
  Header,
  Title,
  Content,
  List,
} from "native-base";
import UserListbox from "../atoms/userlistbox";

const exampleJSON = [
  {
    title: "Java Developer",
    location: "Berlin",
    payment: "5000 - 6000 EUR",
    url:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
  },
  {
    title: "Python Developer",
    location: "Paris",
    payment: "5000 - 8000 EUR",
    url:
      "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
  },
  {
    title: "Front End Dev",
    location: "New York",
    payment: "9000 - 14000 USD",
    url:
      "https://freelancersinternational.com/wp-content/uploads/2020/11/webguru.jpg",
  },
  {
    title: "Back End Dev",
    location: "California",
    payment: "8000 - 11000 USD",
    url:
      "https://bestprofilepix.com/wp-content/uploads/2014/03/cute-stylish-winter-girls-facebook-profile-pictures.jpg",
  },
  {
    title: "Student",
    location: "Nigeria",
    payment: "100 - 200 USD",
    url:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
  },
];

export default UserList = () => {
  const list = exampleJSON.map((user) => (
    <UserListbox
      title={user.title}
      payment={user.payment}
      location={user.location}
      url={user.url}
    />
  ));

  return (
    <List>
      {list}
      {list}
    </List>
  );
};

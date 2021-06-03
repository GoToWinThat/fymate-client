import React from "react";
import { List } from "native-base";
import OfferListBox from "../atoms/offerlistbox";

export default OfferList = ({ list, onClick }) => {
  const offerList = list.map((user) => (
    <OfferListBox
      key={user.id}
      title={user.title}
      company={user.company}
      payment={user.payment}
      location={user.location}
      url={user.url}
      onClick={onClick}
    />
  ));

  return (
    <List>
      {offerList}
      {offerList}
    </List>
  );
};

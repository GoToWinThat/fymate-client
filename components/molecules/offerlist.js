import React from "react";
import { List } from "native-base";
import OfferListBox from "../atoms/offerlistbox";

export default OfferList = ({ list, onClick }) => {

  const offerList = list.map((offer,idx) => (
    <OfferListBox
      key={idx} 
      title={offer.position}
      company={offer.company}
      payment={offer.salary}
      location={offer.place}
      url={offer.url}
      time={offer.date?.toDate().toString()}
      onClick={() => onClick !== undefined ? onClick(offer) : null}
    />
  ));

  

  return (
    <List>
      {offerList}
    </List>
  );
};

import React from "react";
import { List } from "native-base";
import OfferListBox from "../atoms/offerlistbox";

export default UserList = ({ list, onClick }) => {
  const userList = list.map((user, idx) => (
    <OfferListBox
      key={idx}
      title={user.details?.position}
      company={user.details?.company}
      payment={user.salary}
      location={user.location}
      url={user.url}
      time={user.date?.toDate().toString()}
      onClick={() => onClick !== undefined ? onClick(user) : null}
    />
  ));

  

  return (
    <List>
      {userList}
    </List>
  );
};

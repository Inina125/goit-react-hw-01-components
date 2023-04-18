import PropTypes from "prop-types";
import { List, Item, Status, Avatar, Name } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((friend) => (
        <Item key={friend.id}>
          <Status online={friend.isOnline} />
          <Avatar src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;

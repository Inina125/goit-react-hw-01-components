import PropTypes from "prop-types";
import { Item, Status, Avatar, Name } from "./FriendListItem.styled";

const FriendListItem = ({ item }) => {
  return (
    <Item>
      <Status online={item.isOnline} />
      <Avatar src={item.avatar} alt="User avatar" width="48" />
      <Name>{item.name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default FriendListItem;

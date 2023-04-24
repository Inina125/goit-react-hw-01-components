import PropTypes from "prop-types";
import {
  Container,
  Description,
  DescImage,
  Name,
  DescInfo,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from "./Profile.styled";

const Profile = ({ username, tag, stats, avatar, location }) => (
  <Container>
    <Description>
      <DescImage src={avatar} alt="User avatar" className="avatar" />
      <Name className="name">{username}</Name>
      <DescInfo className="tag">@{tag}</DescInfo>
      <DescInfo className="location">{location}</DescInfo>
    </Description>

    <Stats>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{stats.followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{stats.views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{stats.likes}</StatsQuantity>
      </StatsItem>
    </Stats>
  </Container>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;

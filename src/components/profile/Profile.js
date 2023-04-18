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
  username: PropTypes.string,
  tag: PropTypes.string,
  stats: PropTypes.object,
  avatar: PropTypes.string,
  location: PropTypes.string,
};

export default Profile;

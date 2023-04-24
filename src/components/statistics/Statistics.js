import PropTypes from "prop-types";
import {
  Container,
  Heading,
  List,
  Item,
  Label,
  Percentage,
} from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Container>
      {title && <Heading>Upload stats</Heading>}

      <List>
        {stats.map((item) => (
          <Item key={item.id} color={getRandomColor()}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}</Percentage>
          </Item>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;

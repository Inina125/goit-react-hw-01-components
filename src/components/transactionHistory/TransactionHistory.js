import PropTypes from "prop-types";
import {
  Container,
  Header,
  Row,
  TableBody,
  Cell,
  HeaderCell,
} from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <Header>
        <Row>
          <HeaderCell>Type</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Currency</HeaderCell>
        </Row>
      </Header>

      <TableBody>
        {items.map((item) => (
          <Row key={item.id}>
            <Cell>{item.type}</Cell>
            <Cell>{item.amount}</Cell>
            <Cell>{item.currency}</Cell>
          </Row>
        ))}
      </TableBody>
    </Container>
  );
};

TransactionHistory.propTypes = {
  friends: PropTypes.object,
};

export default TransactionHistory;

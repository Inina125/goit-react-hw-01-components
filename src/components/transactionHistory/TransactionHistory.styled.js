import styled from "styled-components";

const Container = styled.table`
  box-shadow: 1px 1px 5px #ccc;
  background: #fff;
  margin-top: 50px;
  width: 500px;
`;

const Header = styled.thead``;

const Row = styled.tr`
  background: #fff;
  &:nth-child(even) {
    background: #eee;
  }
`;

const HeaderCell = styled.th`
  background: #61dafb;
  color: #fff;
  padding: 15px 8px;
  text-align: center;
`;

const TableBody = styled.tbody``;

const Cell = styled.td`
  padding: 15px 8px;
  text-align: center;
  color: #777;
`;

export { Container, Header, Row, HeaderCell, TableBody, Cell };

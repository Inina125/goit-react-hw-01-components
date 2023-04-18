import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 5px #ccc;
  background: #fff;
  margin-top: 50px;
`;

const Heading = styled.h2`
  height: 50px;
  line-height: 50px;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${(props) => props.color};
`;

const Label = styled.span`
  color: #fff;
`;

const Percentage = styled.span`
  color: #fff;
`;

export { Container, Heading, List, Item, Label, Percentage };

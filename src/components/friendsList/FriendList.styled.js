import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 180px;
  height: 60px;
  padding: 0 10px;
  box-shadow: 1px 1px 5px #ccc;
  background: #fff;
  margin-top: 15px;
`;

const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => (props.online ? "green" : "red")};
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  margin: 0 8px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export { List, Item, Status, Avatar, Name };

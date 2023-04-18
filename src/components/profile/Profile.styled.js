import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  box-shadow: 1px 1px 5px #ccc;
  background: #fff;
  margin-top: 50px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 20px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`;

const DescInfo = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #999;
  margin-top: 6px;
`;

const Stats = styled.ul`
  display: flex;
  height: 80px;
  border-top: 1px solid #e7e7e7;
  margin-top: 25px;
`;

const StatsItem = styled.li`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  background: #fafafa;
  border-right: 1px solid #e7e7e7;
`;

const StatsLabel = styled.span`
  color: #999;
`;

const StatsQuantity = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export {
  Container,
  Description,
  DescImage,
  Name,
  DescInfo,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
};

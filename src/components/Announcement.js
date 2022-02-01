import styled from 'styled-components';

const Container = styled.div`
  color: white;
  background-color: teal;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free shipping on orders over $50!!!</Container>;
};

export default Announcement;

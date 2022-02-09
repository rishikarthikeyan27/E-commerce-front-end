import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-contents: space-between;
`;
const Products = ({ category, filters, sort }) => {
  console.log('Props received by Products component : ', {
    category,
    filters,
    sort,
  });
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Products;

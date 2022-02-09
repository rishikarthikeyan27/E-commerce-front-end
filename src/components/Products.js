import { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        console.log(res);
      } catch (error) {}
    };
    getProducts();
  }, [category]);
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Products;

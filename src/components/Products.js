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
  console.log('Props : ', [category, filters, sort]);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Get products from database to the frontend and set the 'products' state.
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products/?category=${category}`
            : 'http://localhost:5000/api/products'
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  console.log('Products : ', products);

  // Get products according to the category in the url and according to the filters.
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  return (
    <Container>
      {filteredProducts.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Products;

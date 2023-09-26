import type { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';

import Banner from '../components/Banner';
import Products from '../components/Products';
import BannerImage from '../public/images/banner.png';

export const getServerSideProps: GetServerSideProps = async () => {
  const api = 'https://imagineschool.herokuapp.com';
  const result = await fetch(`${api}/products`);
  const data = await result.json();
  data.forEach((product: any) => {
    product.image = `${api}/uploads/${product.fileName}`;
    product.formattedPrice = (new Intl.NumberFormat('pt-BR', { style:'currency', currency: 'BRL'})).format(product.price);
    product.splitPrice = (new Intl.NumberFormat('pt-BR', { style:'currency', currency: 'BRL'})).format(product.price/10);
  });
  return {
    props: {
      productsApi: data
    }
  }
}

const Home: NextPage = ({ productsApi }: any) => {
  return (
    <Main>
      <Banner image={BannerImage} width={1140} heigth={325} />
      <Products products={productsApi} />
    </Main>
  )
}

const Main = styled.main`
  min-height: 60.5vh;
`;

export default Home

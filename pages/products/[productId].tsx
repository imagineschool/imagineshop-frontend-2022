import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Banner from '../../components/Banner';
import { Container } from '../../styles/utils';
import BannerImage from '../../public/images/banner2.png';
import { IProduct } from '../../types';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

interface ProductsProps {
  product: IProduct;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const productId = ctx.params?.productId;
  const api = 'https://imagineschool.herokuapp.com';
  const result = await fetch(`${api}/products/${productId}`);
  const product: IProduct = await result.json();
  product.image = `${api}/uploads/${product.fileName}`;
  product.formattedPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(product.price);
  product.splitPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(product.price / 10);
  return {
    props: {
      product
    }
  }
}

const ProductId: NextPage<ProductsProps> = ({ product }) => {

  const { addProduct } = useContext(ShoppingCartContext);

  const addProductInShoppingCart = (product: IProduct) => {
    toast.success("Produto adicionado no carrinho", {
      position: "bottom-right",
      autoClose: 3000,
    });
    addProduct(product);
  }

  return (
    <>
      <ProductContainer>
        <Banner image={BannerImage} width={1140} heigth={145} />
        <ProductDetail>
          <ImageContainer>
            <Image src={product.image} width={200} height={200} />
          </ImageContainer>

          <div>
            <ProductName>
              {product.name}
            </ProductName>

            <ProductPrice>
              {product.formattedPrice}
            </ProductPrice>

            <ProductSplitPrice>
              10x de {product.splitPrice} sem juros
            </ProductSplitPrice>

            <Button onClick={() => addProductInShoppingCart(product)}>
              Adicionar ao carrinho
            </Button>

            <ProductDescription>
              {product.description}
            </ProductDescription>
          </div>
        </ProductDetail>

        <SummaryTitle>
          <span>Inf</span>ormações do produto
        </SummaryTitle>

        <Summary>
          {product.summary}
        </Summary>
      </ProductContainer>
      <ToastContainer />
    </>
  )
}

const ProductContainer = styled.main`
  ${Container};
`;

const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 31.25rem auto;
  gap: 1rem;
  margin: 3.125rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaeaea;
  border-radius: 4px;
`;

const ProductName = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
`;

const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.125rem;
  font-weight: 700;
  margin: 0;
  margin-top: 2.8125rem;
`;

const ProductSplitPrice = styled.small`
  font-size: 0.875rem;
  color: #999;
`;

const Button = styled.button`
  display: block;
  border: unset;
  border-radius: 4px;
  width: 290px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  margin: 2.25rem 0;
`;

const ProductDescription = styled.small`
  font-size: 0.875rem;
`;

const SummaryTitle = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 2.8rem;
  span {
    text-decoration: underline ${({ theme }) => theme.colors.primary};
  }
`;

const Summary = styled.div`
  min-height: 800px;
`;

export default ProductId
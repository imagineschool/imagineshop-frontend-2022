import type { NextPage } from 'next'
import styled from 'styled-components'
import { Container } from '../styles/utils';

const Success: NextPage = () => {
  return (
    <Main>
      <span>Compra realizada com sucesso.</span>
    </Main>
  )
}

const Main = styled.main`
  ${Container};
  min-height: 589px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Success
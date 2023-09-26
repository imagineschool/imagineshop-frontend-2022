import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Logo from "../public/images/logo.png";
import ShoppingCartLogo from '../public/images/carrinho.png';
import { Container } from "../styles/utils";

const Header = () => {
  return (
    <StyledHeader>
      <Navbar>
        <Image src={Logo} width={200} height={100} alt="logo" />
        <MenuList>
          <MenuItem>
            <Link href="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">
              Sobre
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/shopping-cart">
              <a>
                <Image src={ShoppingCartLogo} width={52} height={52} alt="shopping cart image" />
              </a>
            </Link>
          </MenuItem>
        </MenuList>
      </Navbar>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  margin: 1.87rem 0 3.125rem 0;
`;

const Navbar = styled.nav`
  ${Container};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 700;
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Header;
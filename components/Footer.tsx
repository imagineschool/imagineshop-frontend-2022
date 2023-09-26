import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

import { Container } from "../styles/utils";
import Logo from "../public/images/logo.png";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <ImageContainer>
          <Image src={Logo} width={130} height={60} alt="logo"/>
        </ImageContainer>

        <Contact>
          Imagine Shop - +55 (48) 3771 - 1703 3771 - 1823 - imagine@imagineschool.com.br - Rua Miguel Daux, 129 - Coqueiros - Florianópolis/SC
        </Contact>

        <SocialNetworksList>
          <li>
            <SocialNetworkIcon icon={faFacebookSquare}/>
          </li>

          <li>
            <SocialNetworkIcon icon={faInstagram}/>
          </li>

          <li>
            <SocialNetworkIcon icon={faYoutube}/>
          </li>
        </SocialNetworksList>
      </FooterContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  height: 12.5rem;
  background-color: #f4f4f4;
`;

const FooterContainer = styled.div`
  ${Container};
  display: grid;
  grid-template-columns: 130px auto 130px;
  height: 12.5rem;
`;

const ImageContainer = styled.div`
  padding-top: 2.5rem;
`;

const Contact = styled.p`
  font-size: 0.75rem;
  color: ${({theme}) => theme.colors.secondary};
  margin: 0;
  text-align: center;
  margin-top: 11.125rem;
`;

const SocialNetworksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
  padding-top: 2.5rem;
`;

const SocialNetworkIcon = styled(FontAwesomeIcon)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: 1.875rem;
`;

export default Footer;
import React from "react";
import styled from "styled-components";
import { darkThemeColor } from "../../util";
import Name from "../../components/design-system/Sidebar";
import { AiOutlinePieChart } from "react-icons/ai";
function Footer() {
  return (
    <Container>
      <LinksContainer>
        <Links></Links>
      </LinksContainer>
      {/* <Social>vanessasamira1996@gmail.com</Social> */}
    </Container>
  );
}

const Container = styled.div`
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    margin-left: -30px;
  }
`;
const Links = styled.ul``;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  padding: 12px;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const Social = styled.h5`
  margin-left: -25px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 10px;
    display: flex;
    margin-left: -30px;
  }
`;
export default Footer;

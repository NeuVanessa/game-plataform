import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { cardShadow } from "../../util/index";

import Invoices from "../Invoices.jsx";
import bannergamer from "../../assets/bannergamer.png";
import Chat from "../../pages/Chat";

function Main() {
  return (
    <Container>
      <Navbar />

      <SubContainer>
        <SectionOne>
          <ColumnTwo1>
            <Banner>
              <img
                src={bannergamer}
                alt="Jogos"
                style={{ width: 500, height: 100 }}
              />
              <ContainerButton>
                <Button primary primary_color border_color>
                  Comprar agora
                </Button>
                <Button>Saiba mais</Button>
              </ContainerButton>
            </Banner>
          </ColumnTwo1>
          <ColumnTwo1>
            <TitleText>11:12:02</TitleText>
          </ColumnTwo1>
        </SectionOne>

        <SectionTwo>
          <ColumnOne2>
            <InvoiceContainer>
              <TitleText>Em Alta</TitleText>
              <Invoices />
            </InvoiceContainer>
          </ColumnOne2>
          <ColumnTwo2>
            {/* <TitleText>CHAT</TitleText> */}
            <Chat />
          </ColumnTwo2>
        </SectionTwo>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 3rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const Banner = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
  }
`;
const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;

  animation: go-back 1s;

  @keyframes go-back {
    from {
      transform: translateX(200px);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const Button = styled.button`
  width: 35%;
  height: 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.primary_color ? "white" : "black")};
  font-size: 18px;
  background: ${(props) => (props.primary ? " #091322" : "white")};
  position: relative;
  ::before {
    content: "";
    width: 0;
    height: 0;
    left: 0px;
    bottom: 0px;
    position: absolute;
    box-sizing: border-box;
  }
  :after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    right: 0px;
    top: 0;
    height: 0;
    box-sizing: border-box;
  }
  :hover:after {
    border: ${(props) =>
      props.border_color ? "3px solid white" : "3px solid  #091322"};
    width: 168px;
    height: 40px;
    border-left: none;
    border-top: none;
    transition: height 0.5s linear, width 0.5s linear 0.5s;
  }
  :hover:before {
    border: ${(props) =>
      props.border_color ? "2px solid white" : "2px solid  #091322"};
    width: 172px;
    height: 40px;
    border-right: none;
    border-bottom: none;
    transition: height 0.5s linear, width 0.5s linear 0.5s;
  }

  :hover:after {
    border: ${(props) =>
      props.border_color ? "2px solid white" : "2px solid  #091322"};
    width: 172px;
    height: 40px;
    border-left: none;
    border-top: none;
    transition: height 0.5s linear, width 0.5s linear 0.5s;
  }
  animation: containerAnimation 1s;

  @keyframes containerAnimation {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    60% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
`;

const TitleText = styled.h3`
  height: 20%;
  color: white;
`;

const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const InvoiceContainer = styled.div`
  height: 100%;
  background: transparent;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default Main;

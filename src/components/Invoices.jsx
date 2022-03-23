import React from "react";
import styled from "styled-components";
import Badge from "../components/design-system/Badge.jsx";
// import AvatarImage from "../assets/avatarImage5.jpg";
import AvatarImage2 from "../assets/banner.jpg";
import { cardShadow, hoverEffect } from "../util";

function Invoices() {
  return (
    <InvoicesContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage2} alt="Jogos" />
            </Avatar>
            <TextContainer>
              <Title>Dota 2</Title>
              <SubTitle>101.376 jogadores</SubTitle>
              <SubTitle>Gratuito</SubTitle>
            </TextContainer>
          </Info>
          <Info>
            <Avatar>
              {" "}
              <img src={AvatarImage2} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Dota 2</Title>
              <SubTitle>101.376 jogadores</SubTitle>
              <SubTitle>R$ 50,00</SubTitle>
            </TextContainer>
          </Info>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              {" "}
              <img src={AvatarImage2} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Dota 2</Title>
              <SubTitle>101.376 jogadores</SubTitle>
              <SubTitle> R$ 50,00</SubTitle>
            </TextContainer>
          </Info>
          <Info>
            <Avatar>
              {" "}
              <img src={AvatarImage2} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Dota 2</Title>
              <SubTitle>101.376 jogadores</SubTitle>
              <SubTitle>R$ 50,00</SubTitle>
            </TextContainer>
          </Info>
        </Invoice>
      </CardContent>
    </InvoicesContainer>
  );
}

const InvoicesContainer = styled.div`
  width: 35rem;
  border-radius: 1rem;
  margin-top: 1rem;
  //background-color: white;
  height: 100%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  border-radius: 8px;
  align-items: center;
  margin: 5px 5px 5px 5px;
  background: #091322;
  width: 50%;
  height: 80px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  height: 3.5rem;
  width: 3.5rem;

  img {
    height: 3.5rem;
    width: 3.5rem;
    margin: 0px 5px 5px 5px;
    border-radius: 0rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4`
  color: white;
`;
const SubTitle = styled.h5`
  font-weight: 400;
  color: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;

const Price = styled.div``;

export default Invoices;

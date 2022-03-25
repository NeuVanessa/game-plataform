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
          <Info primary primary_color border_color>
            <Avatar>
              <img src={AvatarImage2} alt="Jogos" />
            </Avatar>
            <TextContainer>
              <Title>Dota 2</Title>
              <SubTitle>101.376 jogadores</SubTitle>
              <SubTitle>Gratuito</SubTitle>
            </TextContainer>
          </Info>

          <Info  primary primary_color border_color>
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
          <Info  primary primary_color border_color>
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
          <Info  primary primary_color border_color>
            {" "}
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
  //height: 100%;
  //box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  // &:hover {
  //   box-shadow: ${hoverEffect};
  // }
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
  margin: 0rem;
  padding-top: 0rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Info = styled.div`

// &:hover {
  //   box-shadow: ${hoverEffect};
  // }
cursor: pointer;
  display: flex;
  border-radius: 8px;
  position: relative;
  border: none;
  align-items: center;
  margin: 5px 5px 5px 5px;
  background: #091322;
  width: 50%;
  height: 80px;
  animation-duration: 0.3s;
  animation-timing-function: ease;
  animation: fadeOut 1s;

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
      props.border_color ? "1px solid white" : "3px solid pink"};
    width: 100%;
    height: 40px;
    border-left: none;
    border-top: none;
    transition: height 0.5s linear, width 0.5s linear 0.5s;
  }
  :hover:before {
    border: ${(props) =>
      props.border_color ? "1px solid white" : "1px solid pink"};
    width: 100%;
    height: 80px;
    border-right: none;
    border-bottom: none;
    transition: height 0.5s linear, width 0.5s linear 0.5s;
  }

  :hover:after {
    border: ${(props) =>
      props.border_color ? "1px solid white" : "1px solid pink"};
    width: 100%;
    height: 80px;
    border-left: none;
    border-top: none;
    transition: height 0.5s linear, width 0.5s linear 0.5s;
  }

  @keyframes fadeOut {
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
  }

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

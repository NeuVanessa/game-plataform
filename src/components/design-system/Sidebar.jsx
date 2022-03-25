import React, { useState } from "react";

import styled from "styled-components";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Library from "../../pages/Library";
import Main from "../layout/Main";
import Badge from "./Badge";
import Footer from "../layout/Footer";
// import AvatarImage from "../assets/avatarImage.jpeg";
import { darkThemeColor } from "../../util";
function Sidebar() {
  const routes = [
    {
      title: "Inicio",
      to: "/",
      icon: <RiHomeLine />,
    },
    {
      title: "Biblioteca",
      to: "/library",
      icon: <RiFileCopyLine />,
    },
    {
      title: "Amigos",
      to: "/friends",
      icon: <FaWallet />,
    },
    {
      title: "Presentes",
      to: "/gifts",
      icon: <FaWallet />,
    },
    {
      title: "Configuração",
      to: "/config",
      icon: <FaWallet />,
    },
  ];

  return (
    <>
      <Container>
        <ProfileContainer>
          <Name>GameVX</Name>
        </ProfileContainer>
        <LinksContainer>
          <Links>
            {routes.map((item, index) => {
              return (
                <li key={index}>
                  <NavigationContainer>
                    <Navegation to={item.to}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Navegation>
                  </NavigationContainer>
                </li>
              );
            })}
          </Links>
        </LinksContainer>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 20%;
  height: 100% !important;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
  
`;

const Name = styled.h1`
  color: pink;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 2rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  //background-color: ${darkThemeColor};

  height: 100%;
  width: 100%;

  //border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;

  .nav-menu-items {
    background-color: #060b26;
  }
`;

const Navegation = styled(Link)`
  transition: ease-in-out 0.5s;
  margin-left: 25%;
  margin-bottom: 2rem;
  text-decoration: none;
  display: flex;
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

  :hover {
    color: #091322;
    transition: ease-in-out 0.5s;
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -moz-box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -o-box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
  }
`;

const NavigationContainer = styled.div`
  :hover {
    background-color: pink;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;
export default Sidebar;

import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BiBell } from "react-icons/bi";

import AvatarImage from "../../assets/banner.jpg";

function Navbar() {
  return (
    <NavbarContainer>
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="Procure algum jogo" />
      </InputContainer>

      <Avatar>
        <BiBell
          alt="Jogos"
          style={{
            borderRadius: 30,
            width: 30,
            height: 30,
            color: "black",
            cursor: "pointer",
          }}
        />
        <img
          src={AvatarImage}
          alt="Jogos"
          style={{ borderRadius: 0, cursor: "pointer" }}
        />
      </Avatar>
      <Text>
        Bom dia,
        <span> Vanessa</span>
      </Text>
    </NavbarContainer>
  );
}

const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    margin: 0px 5px 5px 5px;
    border-radius: 0rem;
    animation: rotation-image 1s ease-in infinite;
  }

  @keyframes rotation-image {
    0% {
      border-radius: 0;
    }
    60% {
      border-radius: 35% 0 35% 0;
    }
    100% {
      border-radius: 0%;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: none;
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const Text = styled.h1`
  color: white;
  box-shadow:red;
  span {
    font-weight: 500;
    color: red;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;
const InputContainer = styled.div`
  display: flex;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: none;
  }
`;

const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;
const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #464646;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default Navbar;

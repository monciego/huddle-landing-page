import React from "react";
import {
  HeaderDescription,
  HeaderIllustrationContainer,
  HeaderTexts,
  HeaderTitle,
  Logo,
  Nav,
  StyledHeader,
} from "../styles/Header.styled";
import { Container } from "../styles/Container.styled";
import { Button } from "../styles/Button.styled";
import { Flex } from "../styles/Flex.styled";

import logo from "../assets/logo.svg";
import heroImage from "../assets/illustration-mockups.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} />
          <Button bg="#fff" color="hsl(192, 100%, 9%)">
            Try It Free
          </Button>
        </Nav>

        <Flex>
          <HeaderTexts>
            <HeaderTitle>Build The Community Your Fans Will Love</HeaderTitle>
            <HeaderDescription>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </HeaderDescription>
            <Button>Get Started For Free</Button>
          </HeaderTexts>
          <HeaderIllustrationContainer>
            <img src={heroImage} alt="" />
          </HeaderIllustrationContainer>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;

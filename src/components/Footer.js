import React from "react";
import logo from "../assets/footer-logo.svg";
import telephoneIcon from "../assets/icon-phone.svg";
import mailIcon from "../assets/icon-email.svg";
import facebookLogo from "../assets/facebook.svg";
import twitterLogo from "../assets/twitter.svg";
import instagramLogo from "../assets/instagram.svg";
import { Button } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import {
  Copyright,
  FooterCard,
  FooterCardTitle,
  FooterContactDetail,
  FooterContactDetails,
  FooterContacts,
  FooterDetails,
  FooterIcon,
  FooterLink,
  FooterLinks,
  FooterLogo,
  FooterSocial,
  FooterSocials,
  SocialsCopyright,
  StyledFooter,
} from "../styles/Footer.styled";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container>
        <FooterCard>
          <FooterCardTitle>Ready To Build Your Community?</FooterCardTitle>
          <Button>Get Started For Free</Button>
        </FooterCard>
        <FooterLogo src={logo} alt="logo" />
        <FooterDetails>
          <FooterContacts>
            <FooterContactDetails>
              <FooterIcon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 9.99999C4.99858 7.16754 6.70425 4.61338 9.32107 3.52939C11.9379 2.44539 14.9501 3.04523 16.952 5.04899C18.2685 6.3596 19.0059 8.14238 19 9.99999C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 6.99999C10.9282 6.99999 9.93782 7.57179 9.40193 8.49999C8.86603 9.42819 8.86603 10.5718 9.40193 11.5C9.93782 12.4282 10.9282 13 12 13C13.6569 13 15 11.6568 15 9.99999C15 8.34313 13.6569 6.99999 12 6.99999Z"
                    fill="#fff"
                  ></path>
                </svg>
              </FooterIcon>
              <FooterContactDetail>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
              </FooterContactDetail>
            </FooterContactDetails>
            <FooterContactDetails>
              <FooterIcon>
                <img src={telephoneIcon} alt="phone number" />
              </FooterIcon>
              <FooterContactDetail>+1-543-123-4567</FooterContactDetail>
            </FooterContactDetails>
            <FooterContactDetails>
              <FooterIcon>
                <img src={mailIcon} alt="email address" />
              </FooterIcon>
              <FooterContactDetail>example@ huddle.com</FooterContactDetail>
            </FooterContactDetails>
          </FooterContacts>
          <FooterLinks>
            <FooterLink href="https://jerichobantiquete.netlify.app/">
              About Us
            </FooterLink>
            <FooterLink href="https://github.com/monciego">
              What We Do
            </FooterLink>
            <FooterLink href="#0">FAQ</FooterLink>
          </FooterLinks>
          <FooterLinks>
            <FooterLink href="#0">Career</FooterLink>
            <FooterLink href="#0">Blog</FooterLink>
            <FooterLink href="mailto:jerichobantiquete@gmail.com">
              Contact Us
            </FooterLink>
          </FooterLinks>
          <SocialsCopyright>
            <FooterSocials>
              <FooterSocial src={facebookLogo} alt="facebook" />
              <FooterSocial src={twitterLogo} alt="twitter" />
              <FooterSocial src={instagramLogo} alt="instagram" />
            </FooterSocials>
            <Copyright>
              &copy; Copyright {year}{" "}
              <a href="mailto:jerichobantiquete@gmail.com">Huddle</a>. All
              rights reserved.
            </Copyright>
          </SocialsCopyright>
        </FooterDetails>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

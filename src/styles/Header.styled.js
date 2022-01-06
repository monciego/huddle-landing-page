import styled from "styled-components";
import mobileBg from "../assets/bg-hero-mobile.svg";
import desktopBg from "../assets/bg-hero-desktop.svg";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.backgroundColor.header};
  background-image: url("${mobileBg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-image: url("${desktopBg}");
    padding-bottom: 3rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  margin-bottom: 3.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 1.5rem;
  }
`;

export const Logo = styled.img`
  max-width: 6.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 8.5rem;
  }
`;

export const HeaderTexts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: 600;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1.85rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: start;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2.5rem;
  }
`;

export const HeaderDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkCyan};
  text-align: center;
  margin: 1rem 0 1.25rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: start;
  }
`;

export const HeaderIllustrationContainer = styled.div`
  margin: 1.85rem 0;
`;

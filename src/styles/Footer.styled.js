import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.backgroundColor.footer};
  color: ${({ theme }) => theme.colors.paleCyan};
  margin-top: 6.5rem;
  padding: 8rem 0 2rem 0;
  position: relative;
`;

export const FooterCard = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  color: ${({ theme }) => theme.colors.darkCyan};
  padding: 3rem 0.5rem;
  text-align: center;
  position: absolute;
  top: -5%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 2.5rem 0.5rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 55%;
  }
`;

export const FooterCardTitle = styled.h3`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily.poppins};

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.8rem;
  }
`;

export const FooterLogo = styled.img`
  margin-bottom: 2.5rem;
`;

export const FooterDetails = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 3rem;
  }
`;

export const FooterContacts = styled.div`
  margin-bottom: 2.5rem;
  flex: 2.5;
`;

export const FooterContactDetails = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`;

export const FooterIcon = styled.div``;

export const FooterContactDetail = styled.span``;

export const FooterLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialsCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1.5;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: space-between;
    align-items: start;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 3rem 0 1.5rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0;
  }
`;

export const FooterSocial = styled.img`
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid #fff;
  border-radius: 50%;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Copyright = styled.p`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

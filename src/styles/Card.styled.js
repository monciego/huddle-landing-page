import styled from "styled-components";

export const StyledCards = styled.section`
  padding: 5rem 0;
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 2.25rem;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  margin: 1.85rem 0;
  border-radius: 5px;

  & > div {
    flex: 1;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: ${({ direction }) => direction || "row"};
    gap: 5rem;
    padding: 5rem;
  }
`;

export const CardImageContainer = styled.div``;

export const CardImage = styled.img`
  width: 80%;
`;

export const CardDescriptionContainer = styled.div``;

export const CardTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.poppins};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.65rem;
    text-align: start;
  }
`;

export const CardDescription = styled.p`
  text-align: center;
  font-size: 0.9rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: start;
    font-size: 1rem;
  }
`;

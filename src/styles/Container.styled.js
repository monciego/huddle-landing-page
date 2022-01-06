import styled from "styled-components";

export const Container = styled.div`
  max-width: 90%;
  width: 100%;
  margin: 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 85%;
  }
`;

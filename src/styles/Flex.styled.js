import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction || "column"};
  gap: 0;

  & > div {
    flex: 1;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: ${({ direction }) =>
      direction === "row" ? "column" : "row"};
    gap: 2.5rem;
  }
`;

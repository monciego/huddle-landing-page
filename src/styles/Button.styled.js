import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.75rem 2.5rem;
  background-color: ${({ bg }) => bg || "hsl(322, 100%, 66%)"};
  color: ${({ color }) => color || "hsl(193, 100%, 96%)"};
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};

  cursor: pointer;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.9rem;
  }
`;

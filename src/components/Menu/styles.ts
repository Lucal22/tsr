import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    position: absolute;
    left: 0;
    top: 25%;
    display: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${theme.colors.white};

    svg {
      width: 4rem;
      height: 3.4rem;
    }

    @media (max-width: ${theme.screen.size.medium}) {
      display: block;
    }
  `}
`;

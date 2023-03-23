import styled, { css } from 'styled-components';

export const Articles = styled.div`
  padding: 20px 15px;
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: block;

    @media (min-width: ${theme.screen.size.large}) {
      display: grid;
      grid-template-columns: 90rem 1fr;
      gap: ${theme.spaces.medium};
    }
  `}
`;

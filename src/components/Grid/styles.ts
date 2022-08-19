import styled, { css } from 'styled-components';

export const Articles = styled.div`
  padding: 20px 15px;
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 90rem 1fr;
    gap: ${theme.spaces.medium};
    @media (max-width: ${theme.screen.size.medium}) {
      display: block;
    }
  `}
`;

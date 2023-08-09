import styled, { css } from 'styled-components';

export const Banners = styled.aside`
  ${({ theme }) => css`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    @media (min-width: ${theme.screen.size.large}) {
      display: block;
    }
  `}
`;

export const GridContent = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.screen.size.medium}) {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    @media (min-width: ${theme.screen.size.large}) {
      display: block;
    }
  `}
`;

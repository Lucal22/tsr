import styled, { css } from 'styled-components';

export const Banners = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.screen.size.medium}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    @media (max-width: ${theme.screen.size.small}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

import styled, { css } from 'styled-components';

export const Banner = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 13.5rem 1.5rem 3rem 1.5rem;
    @media (max-width: ${theme.screen.size.small}) {
      margin-top: 0;
    }
  `}
`;

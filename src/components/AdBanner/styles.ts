import styled, { css } from 'styled-components';

export const Banner = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 1.5rem;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    @media (max-width: ${theme.screen.size.small}) {
      margin-top: 0;
    }
  `}
`;

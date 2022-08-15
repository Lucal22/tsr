import styled, { css } from 'styled-components';

export const Articles = styled.div`
  padding: 20px 15px;
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 3fr 1fr;
    background-color: ${theme.background.secondary};
    gap: ${theme.spaces.xLarge};
  `}
`;

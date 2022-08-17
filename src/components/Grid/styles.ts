import styled, { css } from 'styled-components';

export const Articles = styled.div`
  padding: 20px 15px;
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: ${theme.spaces.xLarge};
  `}
`;

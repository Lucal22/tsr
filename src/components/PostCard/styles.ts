import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.primary};
    min-height: 169px;
    margin-bottom: 20px;
  `}
`;

export const Thumbnail = styled.div`
  width: 25rem;
`;

export const CardContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.primary};
  `}
`;

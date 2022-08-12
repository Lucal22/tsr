import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.background.secondary};
    border-radius: 5px;
    box-shadow: 0 0 1px black;
    padding: 20px 20px 10px 20px;
    color: ${theme.colors.primary};
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    text-align: center;
  `}
`;

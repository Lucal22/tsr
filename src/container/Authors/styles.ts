import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.style.defaultFont};
  `}
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

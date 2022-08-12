import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 100px;
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
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

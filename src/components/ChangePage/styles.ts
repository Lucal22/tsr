import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    justify-content: center;
    display: flex;
    gap: ${theme.spaces.medium};
    color: ${theme.colors.primary};
    button {
      color: ${theme.colors.details};
      background-color: transparent;
      //font-size: ${theme.fonts.size.large};
      border: none;
      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `}
`;

export const Previous = styled.button`
  cursor: pointer;
`;

export const Next = styled.button`
  cursor: pointer;
`;

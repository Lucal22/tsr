import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    gap: 3rem;
    justify-content: end;
    @media (min-width: ${theme.screen.size.medium}) {
      margin-bottom: 3rem;
    }
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    width: 15rem;
    height: 3rem;
    cursor: pointer;
    background-color: ${theme.background.secondary};
    color: ${theme.colors.primary};
    border: none;
    border-radius: 0.5rem;
    @media (min-width: ${theme.screen.size.medium}) {
      font-size: ${theme.fonts.size.small};
    }
  `}
`;

export const Option = styled.option`
  border: none;
  border-color: black;
`;

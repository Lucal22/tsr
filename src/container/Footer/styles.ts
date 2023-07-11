import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding-top: 6rem;
    background-color: ${theme.background.details};
    color: ${theme.colors.slate};
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    p {
      margin-bottom: 1rem;
    }
    @media (max-width: ${theme.screen.size.xSmall}) {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;

export const Thumbnail = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.screen.size.xSmall}) {
      display: none;
    }
  `}
`;

export const About = styled.div`
  ${({ theme }) => css`
    p {
      color: ${theme.colors.logo};
      font-size: ${theme.fonts.size.heading};
    }
  `}
`;

export const Media = styled.div`
  ${({ theme }) => css`
    p {
      color: ${theme.colors.logo};
    }
  `}
`;

export const Contact = styled.div`
  ${({ theme }) => css`
    p {
      color: ${theme.colors.logo};
      margin-bottom: 1rem;
    }
  `}
`;

export const Topics = styled.ul`
  ${({ theme }) => css`
    li {
      margin-bottom: 0.5rem;
      list-style-type: none;
      a:hover {
        color: ${theme.colors.logo};
      }
    }
  `}
`;

export const Copyright = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.xSmall};
    margin-top: 2rem;
    color: ${theme.colors.slate};
  `}
`;

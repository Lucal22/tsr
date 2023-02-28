import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    color: ${theme.colors.primary};
    background-color: ${theme.background.secondary};
    max-height: 40rem;
    margin-bottom: 2rem;
    border-radius: 0 1.5rem 0 0;
    @media (max-width: ${theme.screen.size.medium}) {
      border-radius: 1.5rem;
    }
    @media (max-width: ${theme.screen.size.xSmall}) {
      height: 14rem;
      border-radius: 1.5rem;
    }
  `}
`;

export const Thumbnail = styled.div`
  ${({ theme }) => css`
    width: 35rem;
    @media (max-width: ${theme.screen.size.medium}) {
      padding-left: 1rem;
      display: flex;
      align-items: center;
    }
  `}
`;

export const CardContent = styled.div`
  ${({ theme }) => css`
    width: 55rem;
    height: 100%;
    padding: 1rem;
    @media (max-width: ${theme.screen.size.small}) {
      width: 30rem;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    padding: 0.5rem 0;
    font-size: ${theme.fonts.size.medium};
    @media (max-width: ${theme.screen.size.xSmall}) {
      font-size: ${theme.fonts.size.small};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.xSmall};
    color: ${theme.colors.details};
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
    @media (max-width: ${theme.screen.size.small}) {
      display: none;
    }
  `}
`;

export const Details = styled.div`
  position: absolute;
  bottom: 0;
`;

export const Preferences = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.details};
    a {
      color: ${theme.colors.blue};
    }
    @media (max-width: ${theme.screen.size.small}) {
      display: none;
    }
  `}
`;

export const SocialMedias = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.xSmall};

    color: ${theme.colors.details};
    a {
      color: ${theme.colors.blue};
    }
    @media (min-width: ${theme.screen.size.small}) {
      font-size: ${theme.fonts.size.small};
    } ;
  `}
`;

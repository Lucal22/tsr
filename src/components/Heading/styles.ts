import styled, { css } from 'styled-components';
//import { Theme } from '../../styles/styled-components';

type HeadingProps = {
  combo: boolean;
};

export const Heading = styled.h1<HeadingProps>`
  ${({ theme, combo }) => css`
    color: ${combo ? theme.colors.lightBlue : theme.colors.green};
    font-size: 30px;
  `}
`;

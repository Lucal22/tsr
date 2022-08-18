import styled, { css } from 'styled-components';
import { PostStyleProps } from '../../Types/style';
import { Colors } from '../StyleFunctions/color';

export const Details = styled.p<PostStyleProps>`
  ${({ theme, categorySlug, font }) => css`
    padding: 0.4rem 0;
    font-size: ${font == 'small'
      ? theme.fonts.size.small
      : theme.fonts.size.xSmall};
    color: ${theme.colors.details};
    a {
      ${Colors[categorySlug](theme)}
    }
  `}
`;

import React, { useContext } from 'react';
import * as Styled from './styles';
import { SunDim, Moon } from 'phosphor-react';
import { HeaderProps } from '../Header';
import { ThemeContext } from 'styled-components';

export default function SwitchTheme({ handleTheme }: HeaderProps) {
  const { title } = useContext(ThemeContext);
  return (
    <Styled.Button aria-label="Botão do tema" onClick={handleTheme}>
      {title === 'light' ? (
        <SunDim aria-label="Mudar para tema escuro" size={25} />
      ) : (
        <Moon aria-label="Mudar para tema claro" size={25} />
      )}
    </Styled.Button>
  );
}

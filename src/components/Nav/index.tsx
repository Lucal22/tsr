import React from 'react';
import * as Styled from './styles';
import list from './mock';
import Links from '../Links';
import Switch from '../Switch';
import { HeaderProps } from '../Header';
import Menu from '../Menu';

export default function Nav({ handleTheme }: HeaderProps) {
  return (
    <Styled.Nav>
      <Styled.Flex text="medium" position="top">
        {list[0].map((item) => {
          return (
            <Links key={item.link} link={item.link} newTab={item.newTab}>
              {item.children}
            </Links>
          );
        })}
        <Menu />
        <form>
          <Styled.Input
            type="text"
            placeholder="Pesquise sobre algum post"
          ></Styled.Input>
        </form>
        <Switch handleTheme={handleTheme} />
      </Styled.Flex>
      <Styled.Flex text="small" position="bottom">
        {list[1].map((item) => {
          return (
            <Links key={item.link} link={item.link} newTab={item.newTab}>
              {item.children}
            </Links>
          );
        })}
      </Styled.Flex>
    </Styled.Nav>
  );
}

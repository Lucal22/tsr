import React from 'react';
import * as Styled from './styles';
import list from './mock';
import Links from '../Links';

export default function Nav() {
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
        <span>campo de busca</span>
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

import { List } from 'phosphor-react';
import React, { useState } from 'react';
import * as Styled from './styles';
import { motion } from 'framer-motion';

import { img } from '../../../../assets/index';
import Image from 'next/image';
import list from '../Nav/links';
import Links from '../../../../components/Links';

export type MenuProps = {
  children: React.ReactNode;
};

export default function Menu() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Styled.Button>
        <List
          aria-label="Abre e fecha Menu"
          onClick={() => {
            setMenu(!menu);
          }}
        />
      </Styled.Button>
      <Styled.Menu
        open={menu}
        as={motion.div}
        whileInView={{ x: [-200, 0] }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
      >
        <Styled.Logo href="/">
          <Image src={img.logo} />
        </Styled.Logo>

        <Styled.Nav>
          {list[0].map((item) => {
            return (
              <Styled.MenuItens key={item.link}>
                <Links link={item.link} newTab={item.newTab}>
                  {item.children}
                </Links>
              </Styled.MenuItens>
            );
          })}
          {list[1].map((item) => {
            return (
              <Styled.MenuItens key={item.link}>
                <Links link={item.link} newTab={item.newTab}>
                  {item.children}
                </Links>
              </Styled.MenuItens>
            );
          })}
        </Styled.Nav>
      </Styled.Menu>
    </>
  );
}

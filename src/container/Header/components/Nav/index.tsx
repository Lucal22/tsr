import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import * as Styled from './styles';
import list from './links';
import Menu from '../Menu';
import { HeaderProps } from '../..';
import Links from '../../../../components/Links';
import Switch from '../../../../components/Switch';

export default function Nav({ handleTheme }: HeaderProps) {
  const router = useRouter();
  const [search, setSearch] = useState(router?.query?.q || '');
  const [disabled, setDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);

  const inputTimeout = useRef<number | NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isReady) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current as number);

    if (router?.query?.q === search) {
      return;
    }

    const q = search;

    if (!q || q.length <= 3) {
      return;
    }
    inputTimeout.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search/',
          query: { q: search },
        })
        .then(() => {
          setIsReady(true);
          setSearch('');
        });
    }, 600);

    return () => clearTimeout(inputTimeout.current as number);
  }, [search, router]);

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
        <Styled.Input
          type="search"
          placeholder="Pesquise sobre algum post"
          onChange={(e) => setSearch(e.target.value)}
          disabled={disabled}
        ></Styled.Input>
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
      <Menu />
    </Styled.Nav>
  );
}

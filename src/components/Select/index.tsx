import React from 'react';
import * as Styled from './styles';
import { expansions, categories } from './infos';

export type SelectProps = {
  anything?: string;
};

export default function Select() {
  return (
    <Styled.Container>
      <Styled.Select>
        {expansions.map((item) => (
          <Styled.Option value={item.slug} key={item.slug}>
            {item.expansion}
          </Styled.Option>
        ))}
      </Styled.Select>
      <Styled.Select>
        {categories.map((item) => (
          <Styled.Option value={item.slug} key={item.slug}>
            {item.category}
          </Styled.Option>
        ))}
      </Styled.Select>
    </Styled.Container>
  );
}

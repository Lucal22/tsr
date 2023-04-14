import React from 'react';
import * as Styled from './styles';
import { expansions, categories } from './infos';

export type SelectProps = {
  handleExpansion: (value: string) => void;
  handleCategory: (value: string) => void;
};

export default function Select({
  handleExpansion,
  handleCategory,
}: SelectProps) {
  function handleExpansionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    handleExpansion(e.target.value);
  }
  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    handleCategory(e.target.value);
  }

  return (
    <Styled.Container>
      <Styled.Select onChange={(e) => handleExpansionChange(e)}>
        {expansions.map((item) => (
          <Styled.Option value={item.slug} key={item.slug}>
            {item.expansion}
          </Styled.Option>
        ))}
      </Styled.Select>
      <Styled.Select onChange={(e) => handleCategoryChange(e)}>
        {categories.map((item) => (
          <Styled.Option value={item.slug} key={item.slug}>
            {item.category}
          </Styled.Option>
        ))}
      </Styled.Select>
    </Styled.Container>
  );
}

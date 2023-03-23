import React from 'react';
import { SideContentTypes } from '../../Types/post';
import Banners from '../Banners';
import * as Styled from './styles';

export default function SideContent({ mount, letter }: SideContentTypes) {
  return (
    <Styled.Banners>
      <Styled.GridContent>
        <Banners
          bannerThumb={mount.attributes.image.data.attributes.formats.small.url}
          alt={mount.attributes.image.data.attributes.alternativeText}
          category={mount.attributes.category.data.attributes.name}
          categorySlug={mount.attributes.category.data.attributes.slug}
          slug={mount.attributes.slug}
          title={mount.attributes.title}
        />
      </Styled.GridContent>
      <Styled.GridContent>
        <Banners
          bannerThumb={
            letter.attributes.image.data.attributes.formats.small.url
          }
          alt={letter.attributes.image.data.attributes.alternativeText}
          category={letter.attributes.category.data.attributes.name}
          categorySlug={letter.attributes.category.data.attributes.slug}
          slug={letter.attributes.slug}
          title={letter.attributes.title}
        />
      </Styled.GridContent>
      <Styled.GridContent>
        <Banners
          bannerThumb={mount.attributes.image.data.attributes.formats.small.url}
          alt={mount.attributes.image.data.attributes.alternativeText}
          category={mount.attributes.category.data.attributes.name}
          categorySlug={mount.attributes.category.data.attributes.slug}
          slug={mount.attributes.slug}
          title={mount.attributes.title}
        />
      </Styled.GridContent>
      <Styled.GridContent>
        <Banners
          bannerThumb={
            letter.attributes.image.data.attributes.formats.small.url
          }
          alt={letter.attributes.image.data.attributes.alternativeText}
          category={letter.attributes.category.data.attributes.name}
          categorySlug={letter.attributes.category.data.attributes.slug}
          slug={letter.attributes.slug}
          title={letter.attributes.title}
        />
      </Styled.GridContent>
    </Styled.Banners>
  );
}

import { AttributesType, Category, Tag } from '../../Types/post';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import SideContent from '../../components/SideContent';
import AttributeCard from './components/AttributeCard';
import * as Styled from './styles';

type AttributesComponentType = AttributesType & {
  isExpansion: boolean;
};

type slugs =
  | 'dawntrail'
  | 'endwalker'
  | 'shadowbringers'
  | 'stormblood'
  | 'heavensward'
  | 'arr'
  | 'geral';

export default function Attributes({
  attributes,
  isExpansion,
  mount,
  letter,
}: AttributesComponentType) {
  return (
    <Styled.Container>
      <Container width={'large'}>
        <Styled.Content>
          <Grid>
            <Styled.Posts>
              {attributes.map((item: Tag | Category) => {
                return (
                  <AttributeCard
                    key={item.id}
                    title={item.attributes.name}
                    alt={item.attributes.image.data.attributes.alternativeText}
                    thumbnail={
                      item.attributes.image.data.attributes.formats.thumbnail
                        .url
                    }
                    description={item.attributes.description}
                    slug={item.attributes.slug}
                    categorySlug={item.attributes.slug as slugs}
                    isExpansion={isExpansion}
                  />
                );
              })}
            </Styled.Posts>
            <SideContent mount={mount} letter={letter} />
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

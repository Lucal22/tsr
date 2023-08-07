import { AttributesType } from '../../Types/post';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import SideContent from '../../components/SideContent';
import * as Styled from './styles';

export default function Attributes({
  attributes,
  mount,
  letter,
}: AttributesType) {
  return (
    <Styled.Container>
      <Container width={'large'}>
        <Styled.Content>
          <Grid>
            <Styled.Posts>{attributes[0].attributes.name}</Styled.Posts>
            <SideContent mount={mount} letter={letter} />
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

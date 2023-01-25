import { renderTheme } from '../../utils/renderTheme';
import PostCard from './index';

describe('<PostCard />', () => {
  it('should render', () => {
    const postCardContent = renderTheme(
      <PostCard
        categorySlug={'endwalker'}
        thumbnail={'/'}
        alt={''}
        title={''}
        slug={''}
        category={''}
        authorSlug={''}
        author={''}
        date={''}
        description={''}
      />,
    );
    expect(postCardContent).toMatchSnapshot;
  });
});

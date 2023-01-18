import { renderTheme } from '../../utils/renderTheme';
import SideContent from './index';

describe('<SideContent />', () => {
  it('should render', () => {
    const sideContent = renderTheme(<SideContent>test</SideContent>);
    expect(sideContent).toMatchSnapshot;
  });
});

import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Header from './index';

describe('<Header />', () => {
  it('should render', () => {
    renderTheme(<Header theme={'light'} />);
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});

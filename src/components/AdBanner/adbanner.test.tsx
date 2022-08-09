import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import AdBanner from './index';

describe('<AdBanner />', () => {
  it('should render', () => {
    renderTheme(<AdBanner />);
    expect(screen.getByRole('link')).toBeInTheDocument;
  });
});

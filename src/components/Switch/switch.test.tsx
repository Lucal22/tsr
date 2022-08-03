import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Switch from './index';

describe('<Switch />', () => {
  it('should render', () => {
    renderTheme(<Switch />);
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});

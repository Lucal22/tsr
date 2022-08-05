import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Menu from './index';

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu>xD</Menu>);
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});

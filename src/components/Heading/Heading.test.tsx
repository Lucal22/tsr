import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Heading from './index';

describe('<Heading />', () => {
  it('should render', () => {
    renderTheme(<Heading combo={true}>Olá</Heading>);
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});

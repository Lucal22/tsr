import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Header from './index';

describe('<Header />', () => {
  it('should render', () => {
    renderTheme(
      <Header
        handleTheme={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});

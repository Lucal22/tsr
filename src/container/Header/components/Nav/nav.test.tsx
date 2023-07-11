import { screen } from '@testing-library/react';
import { renderTheme } from '../../../../utils/renderTheme';
import Nav from './index';

describe('<Nav />', () => {
  it('should render', () => {
    renderTheme(
      <Nav
        handleTheme={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument;
  });
});

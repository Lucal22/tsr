import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Switch from './index';

describe('<Switch />', () => {
  it('should render', () => {
    renderTheme(
      <Switch
        handleTheme={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});

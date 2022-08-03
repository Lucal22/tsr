import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Links from './index';

describe('<Links />', () => {
  it('should render on same tab', () => {
    renderTheme(
      <Links link="/" newTab={false}>
        Teste
      </Links>,
    );
    expect(screen.getByRole('link')).toBeInTheDocument;
    expect(screen.getByRole('link')).toHaveAttribute('target', '_self');
  });

  it('should render on a different tab', () => {
    renderTheme(
      <Links link="/" newTab={true}>
        Teste
      </Links>,
    );
    expect(screen.getByRole('link')).toBeInTheDocument;
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });
});

import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Container from './index';

describe('<Container />', () => {
  it('should render', () => {
    renderTheme(
      <Container width={'small'} height={'100%'}>
        Olá
      </Container>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});

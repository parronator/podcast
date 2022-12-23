import { fireEvent, render, screen } from '@testing-library/react';

import Default from './navbar-search';

describe('Default', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Default placeholder="" callback={() => {}} />);
    expect(baseElement).toBeTruthy();
  });

  it('should call the callback', async () => {
    const spy = vi.fn();

    render(<Default placeholder="" callback={spy} />);
    await fireEvent.change(screen.queryByTestId('nav-search')!, { target: { value: 'test' } });
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

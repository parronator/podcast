import { Queries, render, screen } from '@testing-library/react';
import Default from './header-default';
import { BrowserRouter, Router } from 'react-router-dom';
import { ReactElement } from 'react';
import { createBrowserHistory } from 'history';
import userEvent from '@testing-library/user-event';

const renderWithRouter = (ui: ReactElement) => {
  return { ...render<Queries>(ui, { wrapper: BrowserRouter }) };
};

describe('Default', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(<Default />);
    expect(baseElement).toBeTruthy();
  });

  it('should render loading', async () => {
    const { rerender } = renderWithRouter(<Default />);
    expect(screen.queryByTestId('header-spinner')).toBeTruthy();
    rerender(<Default loading={true} />);
    expect(screen.queryByTestId('header-spinner')?.getAttribute('hidden')).toBeNull();
    rerender(<Default loading={false} />);
    expect(screen.queryByTestId('header-spinner')?.getAttribute('hidden')).not.toBeNull();
  });

  it('should navigate to root', async () => {
    const history = createBrowserHistory();
    const spy = vi.spyOn(history, 'push').mockImplementation((v: any) => v.pathname)

    render(<Router location='/some' navigator={history}><Default /></Router>);
    await userEvent.click(screen.queryByTestId('header-link')!);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveReturnedWith('/');
    
  })
});

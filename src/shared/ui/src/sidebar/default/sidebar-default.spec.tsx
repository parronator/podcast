import { render, screen } from '@testing-library/react';

import Default from './sidebar-default';

describe('Default', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Default image='' title='' subtitle='' description='' />);
    expect(baseElement).toBeTruthy();
  });

  it('should render skeleton and content', () => {
    const { rerender } = render(<Default image='' title='' subtitle='' description='' loading={true}/>);
    expect(screen.queryByTestId('sidebar-skeleton')).toBeTruthy();
    expect(screen.queryByTestId('sidebar')).toBeFalsy();
    rerender(<Default image='' title='' subtitle='' description='' loading={false}/>);
    expect(screen.queryByTestId('sidebar-skeleton')).toBeFalsy();
    expect(screen.queryByTestId('sidebar')).toBeTruthy();
  })
});

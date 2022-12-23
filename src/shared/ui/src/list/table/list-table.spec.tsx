import { render, screen } from '@testing-library/react';

import Default from './list-table';

describe('Default', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Default loading={false} title={''} header={[]} items={[]} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render skeleton and content', () => {
    const { rerender } = render(<Default loading={true} title={''} header={[]} items={[]} />);
    expect(screen.queryByTestId('table-skeleton')).toBeTruthy();
    expect(screen.queryByTestId('table')).toBeFalsy();
    rerender(<Default loading={false} title={''} header={[]} items={[]} />);
    expect(screen.queryByTestId('table-skeleton')).toBeFalsy();
    expect(screen.queryByTestId('table')).toBeTruthy();
  });

  it('should render 3 columns x 3 rows', () => {
    const { rerender } = render(
      <Default
        loading={false}
        title={''}
        header={[{ value: 'test' }, { value: 'test' }, { value: 'test' }]}
        items={[{id: '1', values: ['val', 'val', 'val']}, {id: '2', values: ['val', 'val', 'val']}, {id: '3', values: ['val', 'val', 'val']}]}
      />
    );
    expect(screen.getAllByText('test')).toHaveLength(3);
    expect(screen.getAllByText('val')).toHaveLength(9);
  });
});

import { render } from '@testing-library/react';

import Default from './list-grid';

describe('Default', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Default />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Default from './player-default';

describe('Default', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Default loading={false} url="" title="" description=""/>);
    expect(baseElement).toBeTruthy();
  });
});

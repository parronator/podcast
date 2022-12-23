import { render } from '@testing-library/react';

import SidebarContent from './layout-sidebarContent';

describe('SidebarContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarContent />);
    expect(baseElement).toBeTruthy();
  });
});

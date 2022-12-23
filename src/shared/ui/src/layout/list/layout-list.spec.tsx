import { render } from '@testing-library/react';
import List from './layout-list';


describe('List', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<List searchPlaceholder='' searchCallback={vi.fn(() => {})}/>);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Default from './list-box';
import { Queries } from '@testing-library/dom';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui) => {
  return { ...render<Queries>(ui, { wrapper: BrowserRouter }) };
};

describe('Default', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(<Default image="" title="" subtitle="" link=""/>);
    expect(baseElement).toBeTruthy();
  });
});

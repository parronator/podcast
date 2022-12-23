import { render, Queries } from '@testing-library/react';

import Podcast from './podcast';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui) => {
  return { ...render<Queries>(ui, { wrapper: BrowserRouter }) };
};

describe('Podcast', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(<Podcast />);
    expect(baseElement).toBeTruthy();
  });
});

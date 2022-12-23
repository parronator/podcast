import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import { Queries } from '@testing-library/dom';

const renderWithRouter = (ui) => {
  return { ...render<Queries>(ui, { wrapper: BrowserRouter }) };
};

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(<App/>);
    expect(baseElement).toBeTruthy();
  });
});

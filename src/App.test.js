import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
import App from './App';

test('renders without crasking', () => {
  const div = document.createElement('div');
  render(<App />, div);
  unmountComponentAtNode(div)
});

test('renders the paragraph', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi there/i);
  expect(linkElement).toBeInTheDocument();
});

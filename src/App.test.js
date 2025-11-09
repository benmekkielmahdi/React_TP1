import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World', () => {
  render(<App />);
  const helloWorldElement = screen.getByText(/Hello World/i);
  expect(helloWorldElement).toBeInTheDocument();
});

test('renders greeting with name', () => {
  render(<App />);
  const greetingElement = screen.getByText(/Bonjour, Alice/i);
  expect(greetingElement).toBeInTheDocument();
});

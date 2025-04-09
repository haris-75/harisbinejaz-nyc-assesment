import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders heading', () => {
  render(<App />);
  const heading = screen.getByText(/NY Times Most Viewed Articles/i);
  expect(heading).toBeInTheDocument();
});
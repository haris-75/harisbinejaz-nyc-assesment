import { render, screen, fireEvent } from '@testing-library/react';
import { ArticleCard } from '../../src/components/ArticleCard';
import { mockArticle } from '../mocks/mockData';

test('renders article content correctly', () => {
  render(<ArticleCard article={mockArticle} onClick={() => { }} />);
  expect(screen.getByText(/Detailed Article Title/i)).toBeInTheDocument();
  expect(screen.getByText(/This is the abstract of the detailed article./i)).toBeInTheDocument();
  expect(screen.getByText(/By John Smith/i)).toBeInTheDocument();
  expect(screen.getByText(/20 November 2024/)).toBeInTheDocument(); // depends on your formatDate logic
});

test('calls onClick when clicked', () => {
  const onClick = vi.fn();
  render(<ArticleCard article={mockArticle} onClick={onClick} />);

  const card = screen.getByTestId('article-card');
  fireEvent.click(card);

  expect(onClick).toHaveBeenCalledWith(mockArticle);
});

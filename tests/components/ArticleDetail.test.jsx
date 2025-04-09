import { render, screen, fireEvent } from '@testing-library/react';
import { ArticleDetail } from '../../src/components/ArticleDetail';
import { mockArticle } from '../mocks/mockData';


test('renders full article details', () => {
  render(<ArticleDetail article={mockArticle} />);

  expect(screen.getByText(/Detailed Article Title/i)).toBeInTheDocument();
  expect(screen.getByText(/By John Smith/i)).toBeInTheDocument();
  expect(screen.getByText(/This is the abstract/i)).toBeInTheDocument();
  expect(screen.getByText(/World/i)).toBeInTheDocument();
  expect(screen.getByText(/Politics/i)).toBeInTheDocument();
  expect(screen.getByText(/Elections/i)).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/image-large.jpg');
  expect(screen.getByRole('link', { name: /Read Full Article/i })).toHaveAttribute('href', 'https://example.com/article');
});

test('calls onBack when back button is clicked', () => {
  const onBack = vi.fn();
  render(<ArticleDetail article={mockArticle} onBack={onBack} />);

  const backBtn = screen.getByText(/Back to List/i);
  fireEvent.click(backBtn);
  expect(onBack).toHaveBeenCalled();
});

test('does not render if article is empty', () => {
  const { container } = render(<ArticleDetail article={{}} />);
  expect(container).toBeEmptyDOMElement();
});

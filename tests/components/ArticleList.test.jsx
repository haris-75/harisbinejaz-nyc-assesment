import { render, screen, fireEvent } from '@testing-library/react';
import { ArticleList } from '../../src/components/ArticleList';
import { mockArticles } from '../mocks/mockData';

// Mock child components
vi.mock('../../src/components/ArticleCard', () => ({
  ArticleCard: ({ article, onClick }) => (
    <div data-testid="article-card" onClick={() => onClick(article)}>
      {article.title}
    </div>
  ),
}));

vi.mock('../../src/components/LoadingSpinner', () => ({
  LoadingSpinner: () => <div data-testid="loading-spinner">Loading...</div>,
}));

vi.mock('../../src/components/ErrorMessage', () => ({
  ErrorMessage: ({ message }) => (
    <div data-testid="error-message">{message}</div>
  ),
}));

vi.mock('../../src/components/PeriodButton', () => ({
  PeriodButton: ({ period, handlePeriodChange, selectedPeriod }) => (
    <button
      data-testid={`period-btn-${period}`}
      className={selectedPeriod === period ? 'selected' : ''}
      onClick={() => handlePeriodChange(period)}
    >
      {period} days
    </button>
  ),
}));

describe('ArticleList Component', () => {
  test('renders heading and period buttons', () => {
    render(<ArticleList articles={[]} />);
    expect(screen.getByText(/NY Times Most Viewed Articles/i)).toBeInTheDocument();
    expect(screen.getByTestId('period-btn-1')).toBeInTheDocument();
    expect(screen.getByTestId('period-btn-7')).toBeInTheDocument();
    expect(screen.getByTestId('period-btn-30')).toBeInTheDocument();
  });

  test('renders loading spinner when loading', () => {
    render(<ArticleList loading={true} />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('renders error message on error', () => {
    render(<ArticleList error="Something went wrong" />);
    expect(screen.getByTestId('error-message')).toHaveTextContent('Something went wrong');
  });

  test('renders article cards when articles are passed', () => {
    render(<ArticleList articles={mockArticles} />);
    expect(screen.getAllByTestId('article-card')).toHaveLength(2);
    expect(screen.getByText('Article One')).toBeInTheDocument();
    expect(screen.getByText('Article Two')).toBeInTheDocument();
  });

  test('calls onPeriodChange when a period button is clicked', () => {
    const onPeriodChange = vi.fn();
    render(<ArticleList onPeriodChange={onPeriodChange} />);
    fireEvent.click(screen.getByTestId('period-btn-7'));
    expect(onPeriodChange).toHaveBeenCalledWith(7);
  });

  test('calls onArticleSelect when an article is clicked', () => {
    const onArticleSelect = vi.fn();
    render(
      <ArticleList articles={mockArticles} onArticleSelect={onArticleSelect} />
    );
    fireEvent.click(screen.getByText('Article One'));
    expect(onArticleSelect).toHaveBeenCalledWith(mockArticles[0]);
  });
});

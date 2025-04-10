import { ArticleCard } from './ArticleCard';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { PeriodButton } from './PeriodButton';

export const ArticleList = ({
  articles = [],
  loading = false,
  error = '',
  onArticleSelect = () => { },
  selectedPeriod = 1,
  onPeriodChange = () => { }
}) => {
  const periods = [1, 7, 30];

  const handlePeriodChange = (period) => {
    onPeriodChange(period);
  };

  const renderContent = () => {
    if (loading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return <ErrorMessage message={error} />;
    }
    return (
      <div data-testid="article-list">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={onArticleSelect}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">NY Times Most Viewed Articles</h1>
        <div className="flex items-center space-x-4 mb-4">
          <span className="font-medium">Time Period:</span>
          <div className="flex space-x-2">
            {periods.map(period => (
              <PeriodButton
                key={period}
                handlePeriodChange={handlePeriodChange}
                selectedPeriod={selectedPeriod}
                period={period}
              />
            ))}
          </div>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};
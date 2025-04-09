

import { ArticleCard } from './ArticleCard';


export const ArticleList = ({ articles, onArticleSelect, selectedPeriod, onPeriodChange }) => {
  const periods = [1, 7, 30];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">NY Times Most Viewed Articles</h1>
        <div className="flex items-center space-x-4 mb-4">
          <span className="font-medium">Time Period:</span>
          <div className="flex space-x-2">
            {periods.map(period => (
              <button
                key={period}
                onClick={() => onPeriodChange(period)}
                className={`px-4 py-2 rounded ${selectedPeriod === period
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                data-testid={`period-${period}`}
              >
                {period} {period === 1 ? 'Day' : 'Days'}
              </button>
            ))}
          </div>
        </div>
      </div>


      <div data-testid="article-list">
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={onArticleSelect}
          />
        ))}
      </div>

    </div>
  );
};
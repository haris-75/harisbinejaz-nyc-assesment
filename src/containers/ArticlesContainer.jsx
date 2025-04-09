import { useState } from 'react';
import { useArticles } from '../hooks/useArticles';
import { ArticleList } from '../components/ArticleList';
import { ArticleDetail } from '../components/ArticleDetail';

export const ArticlesContainer = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { articles, loading, error, selectedPeriod, setSelectedPeriod } = useArticles(7);

  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedArticle ? (
        <ArticleDetail
          article={selectedArticle}
          onBack={handleBackToList}
        />
      ) : (
        <ArticleList
          articles={articles}
          loading={loading}
          error={error}
          onArticleSelect={handleArticleSelect}
          selectedPeriod={selectedPeriod}
          onPeriodChange={handlePeriodChange}
        />
      )}
    </div>
  );
};
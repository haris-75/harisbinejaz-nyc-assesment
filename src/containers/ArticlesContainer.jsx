
import { useArticles } from '../hooks/useArticles';
import { ArticleList } from '../components/ArticleList';

export const ArticlesContainer = () => {
  const { articles, loading, error, selectedPeriod, setSelectedPeriod } = useArticles(7);

  const handleArticleSelect = () => {
    // TODO: select article here
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ArticleList
        articles={articles}
        loading={loading}
        error={error}
        onArticleSelect={handleArticleSelect}
        selectedPeriod={selectedPeriod}
        onPeriodChange={handlePeriodChange}
      />
    </div>
  );
};
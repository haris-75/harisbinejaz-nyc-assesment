import { formatDate } from '../utils/helpers';

export const ArticleCard = ({ article = {}, onClick }) => {
  const { title = '', abstract = '', byline = '', published_date = '' } = article;

  const handleClick = () => {
    onClick(article);
  };

  return (
    <div
      className="border rounded-lg shadow-md p-4 mb-4 cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={handleClick}
      data-testid="article-card"
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{abstract}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{byline}</span>
        <span>{formatDate(published_date)}</span>
      </div>
    </div>
  );
};

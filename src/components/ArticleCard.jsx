export const ArticleCard = ({ article, onClick }) => (
  <div
    className="border rounded-lg shadow-md p-4 mb-4 cursor-pointer hover:bg-gray-50 transition-colors"
    onClick={() => onClick(article)}
    data-testid="article-card"
  >
    <h2 className="text-xl font-bold mb-2">{article.title}</h2>
    <p className="text-gray-700 mb-2">{article.abstract}</p>
    <div className="flex justify-between text-sm text-gray-500">
      <span>{article.byline}</span>
      {/* <span>{formatDate(article.published_date)}</span> */}
      <span>{(article.published_date)}</span>
    </div>
  </div>
);

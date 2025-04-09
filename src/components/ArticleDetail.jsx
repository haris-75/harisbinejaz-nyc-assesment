export const ArticleDetail = ({ article, onBack }) => {
  if (!article) return null;

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={onBack}
        className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
        data-testid="back-button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to List
      </button>

      <article className="bg-white rounded-lg shadow-lg p-6" data-testid="article-detail">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

        <div className="flex items-center text-gray-600 mb-6">
          <span className="mr-4">{article.byline}</span>
          {/* <span>{formatDate(article.published_date)}</span> */}
          <span>{(article.published_date)}</span>
        </div>

        {article.media && article.media.length > 0 && article.media[0]['media-metadata'] && (
          <img
            src={article.media[0]['media-metadata'][article.media[0]['media-metadata'].length - 1].url}
            alt={article.title}
            className="w-full h-auto rounded-lg mb-6"
          />
        )}

        <p className="text-lg mb-6">{article.abstract}</p>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Section</h2>
          <p>{article.section}</p>
        </div>

        {article.des_facet && article.des_facet.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Topics</h2>
            <div className="flex flex-wrap gap-2">
              {article.des_facet.map((topic, index) => (
                <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Read Full Article
        </a>
      </article>
    </div>
  );
};
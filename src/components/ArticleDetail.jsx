import { formatDate } from '../utils/helpers';
import { BackButton } from './BackButton';

export const ArticleDetail = ({ article = {}, onBack = () => { } }) => {
  const {
    title = '',
    byline = '',
    published_date = '',
    media = [],
    abstract = '',
    section = '',
    des_facet = [],
    url = ''
  } = article;

  const handleBackClick = () => {
    onBack();
  };

  const renderMedia = () => {
    if (!media.length || !media[0]['media-metadata']) return null;
    const metadata = media[0]['media-metadata'];
    const lastImage = metadata[metadata.length - 1];
    return (
      <img
        src={lastImage.url}
        alt={title}
        className="w-full h-auto rounded-lg mb-6"
      />
    );
  };

  const renderTopics = () => {
    if (!des_facet.length) return null;
    return (
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Topics</h2>
        <div className="flex flex-wrap gap-2">
          {des_facet.map((topic, index) => (
            <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {topic}
            </span>
          ))}
        </div>
      </div>
    );
  };

  if (!Object.keys(article).length) return null;

  return (
    <div className="container mx-auto p-4">
      <BackButton text="Back to List" onClick={handleBackClick} />

      <article className="bg-white rounded-lg shadow-lg p-6" data-test-id="article-detail">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        <div className="flex items-center text-gray-600 mb-6">
          <span className="mr-4">{byline}</span>
          <span>{formatDate(published_date)}</span>
        </div>

        {renderMedia()}

        <p className="text-lg mb-6">{abstract}</p>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Section</h2>
          <p>{section}</p>
        </div>

        {renderTopics()}

        <a
          href={url}
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
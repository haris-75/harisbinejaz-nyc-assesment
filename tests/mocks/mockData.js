export const mockArticles = [
  { id: 1, title: 'Article One' },
  { id: 2, title: 'Article Two' },
];

export const mockArticle = {
  title: 'Detailed Article Title',
  byline: 'By John Smith',
  published_date: '2024-11-20',
  abstract: 'This is the abstract of the detailed article.',
  section: 'World',
  des_facet: ['Politics', 'Elections'],
  url: 'https://example.com/article',
  media: [
    {
      'media-metadata': [
        { url: 'https://example.com/image-small.jpg' },
        { url: 'https://example.com/image-medium.jpg' },
        { url: 'https://example.com/image-large.jpg' },
      ],
    },
  ],
};

export const mockApiResponse = {
  results: [
    {
      id: 1,
      title: 'Sample Article',
      byline: 'By Test Author',
      published_date: '2024-04-01',
      abstract: 'This is a test article.',
      url: 'https://nytimes.com/sample-article',
    },
  ],
};

export const mockFetchedArticles = [
  {
    id: 1,
    title: 'Mock Article 1',
    byline: 'Author 1',
    published_date: '2024-04-01',
    abstract: 'Abstract 1',
  },
  {
    id: 2,
    title: 'Mock Article 2',
    byline: 'Author 2',
    published_date: '2024-04-02',
    abstract: 'Abstract 2',
  },
];

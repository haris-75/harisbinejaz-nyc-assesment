const mockArticles = [
  {
    id: 1,
    title: 'Mock Article 1',
    abstract: 'This is the abstract for article 1.',
    byline: 'By Jane Doe',
    published_date: '2024-01-01',
    url: 'https://nytimes.com/article1',
  },
  {
    id: 2,
    title: 'Mock Article 2',
    abstract: 'This is the abstract for article 2.',
    byline: 'By John Smith',
    published_date: '2024-02-01',
    url: 'https://nytimes.com/article2',
  },
];

describe('NY Times Most Viewed Articles', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/mostpopular/v2/viewed/*', {
      statusCode: 200,
      body: {
        results: mockArticles,
      },
    }).as('getArticles');

    cy.visit('/');
    cy.wait('@getArticles');
  });

  it('displays the homepage heading', () => {
    cy.contains('NY Times Most Viewed Articles').should('exist');
  });

  it('displays mocked articles', () => {
    cy.get('[data-testid="article-card"]').should(
      'have.length',
      mockArticles.length,
    );
    cy.contains(mockArticles[0].title).should('exist');
    cy.contains(mockArticles[1].title).should('exist');
  });

  it('allows changing the time period filter', () => {
    cy.contains('1').click();
    cy.wait('@getArticles');
    cy.get('[data-testid="article-card"]').should(
      'have.length',
      mockArticles.length,
    );

    cy.contains('7').click();
    cy.wait('@getArticles');
    cy.get('[data-testid="article-card"]').should(
      'have.length',
      mockArticles.length,
    );

    cy.contains('30').click();
    cy.wait('@getArticles');
    cy.get('[data-testid="article-card"]').should(
      'have.length',
      mockArticles.length,
    );
  });

  it('navigates to article detail view when an article is clicked', () => {
    cy.get('[data-testid="article-card"]').first().click();
    cy.get('h1').should('contain', mockArticles[0].title);
    cy.get('a')
      .should('have.attr', 'href', mockArticles[0].url)
      .and('have.attr', 'target', '_blank');
  });
});

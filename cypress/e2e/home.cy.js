describe('NYT Articles', () => {
  it('loads the homepage and displays the heading', () => {
    cy.visit('/');
    cy.contains('NY Times Most Viewed Articles');
  });

  it('displays a list of articles after loading', () => {
    cy.intercept('GET', '**/mostpopular/**', { fixture: 'articles.json' }).as(
      'getArticles',
    );
    cy.visit('/');
    cy.wait('@getArticles');
    cy.get('li').should('have.length.greaterThan', 0);
  });
});

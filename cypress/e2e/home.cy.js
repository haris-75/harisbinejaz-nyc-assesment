describe('NYT Articles', () => {
  it('loads the homepage and displays the heading', () => {
    cy.visit('/');
    cy.contains('NY Times Most Viewed Articles');
  });
});

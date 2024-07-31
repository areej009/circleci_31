describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

mkdir -p .circleci
touch .circleci/config.yml
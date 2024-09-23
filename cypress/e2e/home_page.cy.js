describe('View pages', () => {
  it('loads home page', () => {
    cy.visit('http://localhost:5173/')

  })

  it('goes to about page', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("About").click()
  })
})
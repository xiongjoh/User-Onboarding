describe('User App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('test link address', () => {
        expect(2).to.equal(2)
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const roleInput = () => cy.get('select[name=role]')
    const statusInput = () => cy.get('input[name=workstatus]')
    const tosInput = () => cy.get('input[name=tos]')
    const sumbit = () => cy.get('#submitBtn')

    it('check to see if inputs exist', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        roleInput().should('exist')
        statusInput().should('exist')
        tosInput().should('exist')
        sumbit().should('exist')
    })
})
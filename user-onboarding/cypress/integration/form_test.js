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
    const statusInput1 = () => cy.get('input[value=working]')
    const statusInput2 = () => cy.get('input[value=notworking]')
    const tosInput = () => cy.get('input[name=tos]')
    const sumbit = () => cy.get('#submitBtn')
    const errors = () => cy.get('.errors')

    it('check to see if inputs exist', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        roleInput().should('exist')
        statusInput1().should('exist')
        statusInput2().should('exist')
        tosInput().should('exist')
        sumbit().should('exist')
    })

    describe('fill in text inputs', () => {
        it('test name text input', () => {
            nameInput()
            .should('have.value', '')
            .type('Johnny Xiong')
            .should('have.value', 'Johnny Xiong')
        })
        it('test email text input', () => {
            emailInput()
            .should('have.value', '')
            .type('xiongjoh@gmail.com')
            .should('have.value', 'xiongjoh@gmail.com')
        })
        it('test password text input', () => {
            passwordInput()
            .should('have.value', '')
            .type('123456789')
            .should('have.value', '123456789')
        })
    })

    describe('test selection, radio buttons, checkboxes', () => {
        it('test select role', () => {
            roleInput().should('have.value', '')
            roleInput().select('student')
            roleInput().should('have.value', 'student')
            roleInput().select('tl')
            roleInput().should('have.value', 'tl')
            roleInput().select('instructor')
            roleInput().should('have.value', 'instructor')
            roleInput().select('alumni')
            roleInput().should('have.value', 'alumni')
            roleInput().select('')
            roleInput().should('have.value', '')
        })

        it('test radio buttons', () => {
            statusInput1().click()
            statusInput2().click()
        })

        it('test tos checkbox', () => {
            tosInput().should('have.value', 'false')
            tosInput().click()
            tosInput().should('have.value', 'true')
        })
    })

    describe('test submit button', () => {
        it('submit button is disabled', () => {
            sumbit().should('be.disabled')
        })
        it('sumbit button is enabled', () => {
            nameInput().type('John')
            emailInput().type('aaa@gmail.com')
            passwordInput().type('12345678')
            roleInput().select('student')
            statusInput2().click()
            tosInput().click()
            sumbit().should('be.enabled')
        })
        it('submit button submits form', () => {
            nameInput().type('John')
            emailInput().type('aaa@gmail.com')
            passwordInput().type('12345678')
            roleInput().select('student')
            statusInput2().click()
            tosInput().click()
            sumbit().click()
        })
    })

    describe('test validation messages', () => {
        it('test name validation', () => {
            nameInput().type('aa')
            cy.contains(/minimum username length/)
            nameInput().clear()
            cy.contains(/required/)
        })
        it('test email validation', () => {
            emailInput().type('124sfag')
            cy.contains(/valid email/)
            emailInput().clear()
            cy.contains(/email is required/)
        })
        it('test password validation', () => {
            passwordInput().type('215')
            cy.contains(/must be 8 characters/)
            passwordInput().clear()
            cy.contains(/must have a password/)
        })
        it('test role validation', () => {
            roleInput().select('student')
            roleInput().select('')
            cy.contains(/please select a role/)
        })
        it('test terms of service validation', () => {
            tosInput().click().click()
            cy.contains(/must be checked/)
        })
    })
})
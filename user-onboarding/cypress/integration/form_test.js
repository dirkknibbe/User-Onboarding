// Get the Name input and type a name in it.
//  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
//  Get the Email input and type an email address in it
//  Get the password input and type a password in it
//  Set up a test that will check to see if a user can check the terms of service box
//  Check to see if a user can submit the form data
//  Check for form validation if an input is left empty

describe('Quotes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })


    // helpers to grab elems
    const nameInput = () => cy.get('input[name=first_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const confirmPasswordInput = () => cy.get('input[name=confirmPassword]');
    const termsOfServiceBox = () => cy.get('input[name=termsOfService]')
    const submitBtn = () => cy.get('button');

    it('the proper elements are showing', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        confirmPasswordInput().should('exist')
        termsOfServiceBox().should('exist');
    })
    describe('Filling out the inputs and if submit button works', () => {
        it('terms of service box starts out blank', () => {
            termsOfServiceBox().click()
        }) 

        it('can type in the input', () => {
            nameInput()
            .should('have.value', '')
            .type('Jeremiah')
            .should('have.value', 'Jeremiah')

            emailInput()
            .should('have.value', '')
            .type('dirk@dirk.com')
            .should('have.value', 'dirk@dirk.com')

            passwordInput()
            .should('have.value', '')
            .type('Doodle16!')
            .should('have.value', 'Doodle16!')

            confirmPasswordInput()
            .should('have.value', '')
            .type('Doodle16!')
            .should('have.value', 'Doodle16!')
        })

        it('the submit button enables when proper inputs are filled out', () => {
            nameInput().type('Jeremiah');
            emailInput().type('dirk@dirk.com');
            passwordInput().type('Doodle16!');
            confirmPasswordInput().type('Doodle16!');
            termsOfServiceBox().click();
            submitBtn().should('not.be.disabled');
        })
        
    })
})
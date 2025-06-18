() => { 
    cy.visit(baseUrl); 
    cy.get('input[name="fname"]').type('John'); 
    cy.get('input[name="lname"]').type('Mark Doe'); 
    cy.get('input[type="submit"]').click(); 
    cy.on('window:alert', str => { 
        expect(str).to.equal('John Mark Doe'); 
    }); 
}


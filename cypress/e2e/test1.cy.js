describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.bing.com/chat?setlang=en')
    cy.get('.b_wlcmDesc').eq(1).should('have.text', 'Your everyday AI companion')
    cy.get('cib-tone-selector').shadow().find('button[role="radio"]').eq(2).click();
    cy.get('cib-action-bar').shadow().find('.button-compose-text').click();
    cy.get('cib-action-bar').shadow().find('#searchbox').type('What is the capitol city of Serbia, short answer');
    cy.get('cib-action-bar').shadow().find('[description="Submit"]').click();
    cy.wait(20000);
    cy.get('cib-chat-turn').shadow().find('.tooltip-target').should('contain', 'Belgrade')
    // cy.get('cib-serp').shadow().get('cib-action-bar').shadow().find('.get-ccp-button').click();
    //cy.get(["tone-precise"]).click() 
  })
})

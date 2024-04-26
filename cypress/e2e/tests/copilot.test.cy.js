import Copilot from '../../support/pages/copilot.js';

const copilotPage = new Copilot();

describe('SienaAI Copilot Model', () => {
  let copilotData;
  const background_color = 'background-image';
  const css = 'have.css';
  
  before(() => {
    cy.fixture('copilot.json').then((copilot) => {
      copilotData = copilot;
    });

  });

  beforeEach(() => {
    cy.visitBaseUrl();
    cy.wait(5000);
  });

  it('should user click on More Precise/Creative/Balanced button', () => {
    copilotPage.getPreciseButton().click().should(css, background_color, copilotData.color.purple);
    copilotPage.getCreativeButton().click().should(css, background_color, copilotData.color.blue);
    copilotPage.getBalancedButton().click().should(css, background_color, copilotData.color.green);

  })

  it('should verify titles of GPTs sections', () => {
    copilotPage.getCopilotGPTs().contains(copilotData.copilotGPTs.copilot).click();
    copilotPage.getTitleGPTCopilot().should('contain', copilotData.copilotGPTs.copilot)
    copilotPage.getCopilotGPTs().contains(copilotData.copilotGPTs.designer).click();
    copilotPage.getTitleGPT().should('contain', copilotData.copilotGPTs.designer);
    copilotPage.getCopilotGPTs().contains(copilotData.copilotGPTs.vacationPlanner).click();
    copilotPage.getTitleGPT().should('contain', copilotData.copilotGPTs.vacationPlanner);
    copilotPage.getCopilotGPTs().contains(copilotData.copilotGPTs.cookingAssistant).click();
    copilotPage.getTitleGPT().should('contain', copilotData.copilotGPTs.cookingAssistant);
    copilotPage.getCopilotGPTs().contains(copilotData.copilotGPTs.fitnessTrainer).click();
    copilotPage.getTitleGPT().should('contain', copilotData.copilotGPTs.fitnessTrainer);

  })

  it('should user click on Get Copilot Pro/Terms/Privacy/FAQs button', () => {
    copilotPage.getTargetLink().contains(copilotData.links.terms).click();
    copilotPage.getTargetLink().contains(copilotData.links.privacy).click();
    copilotPage.getTargetLink().contains(copilotData.links.FAQs).click();
    copilotPage.getCopilotProButton().contains(copilotData.links.tryCopilotPro).click();

  })

  
  it('should verify elements and text on the copilot page', () => {
    copilotPage.getSubTitle().should('have.text', copilotData.subTitle);
    copilotPage.getCibForm().shadow().find(copilotPage.RADIO_BUTTON).eq(2).click();
    copilotPage.getCibActionBar().shadow().find(copilotPage.COMPOSE_TEXT_BUTTON).click();
    copilotPage.getCibActionBar().shadow().find(copilotPage.SEARCH_BOX).type(copilotData.textMessage);
    copilotPage.getCibActionBar().shadow().find(copilotPage.SUBMIT).click();
    cy.wait(20000);
    copilotPage.getCibChatTurn().shadow().find(copilotPage.TOOLTIP).should('contain', copilotData.city);
    copilotPage.getCibMuidConsent().shadow().find(copilotPage.BUTTON).click();
    copilotPage.getCibActionBar().shadow().find(copilotPage.BUTTON_COMPOSE).click();
    copilotPage.getCibForm().shadow().find(copilotPage.RADIO_BUTTON).eq(1).click();
  })

})

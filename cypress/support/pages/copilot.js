class Copilot {

//Locators
    SUBTITLE = '.b_wlcmDesc';
    RADIO_BUTTON = 'button[role="radio"]';
    CIB_FORM_SELECTOR = 'cib-tone-selector';
    CIB_ACTION_BAR = 'cib-action-bar';
    COMPOSE_TEXT_BUTTON = '.button-compose-text';
    BUTTON = 'button[type="button"]';
    BUTTON_COMPOSE = '.button-compose';
    SEARCH_BOX = '#searchbox';
    SUBMIT = '[description="Submit"]';
    CIB_CHAT_TURN = 'cib-chat-turn';
    TOOLTIP = '.tooltip-target';
    CIB_MUID_CONSENT = 'cib-muid-consent';
    PRECISE_BUTTON = '.tone-precise'
    CREATIVE_BUTTON = '.tone-creative';
    BALANCED_BUTTON = '.tone-balanced';
    COPILOT_GPT = '.info-container span';
    TITLE_GPT = '.b_wlcmPersName';
    TITLE_GPT_COPILOT = '.b_wlcmName';
    TARGET_LINK = 'a[target="_blank"]';
    COPILOT_PRO_BUTTON = '.get-ccp-button';
    



//Methods
    getSubTitle() {
        return cy.get(this.SUBTITLE).eq(1);
    }

    getRadioButton() {
        return cy.get(this.RADIO_BUTTON);
    }

    getCibForm() {
        return cy.get(this.CIB_FORM_SELECTOR);
    }

    getCibActionBar() {
        return cy.get(this.CIB_ACTION_BAR);
    }

    getCibChatTurn() {
        return cy.get(this.CIB_CHAT_TURN);
    }

    getCibMuidConsent() {
        return cy.get(this.CIB_MUID_CONSENT);
    }

    getTextButton() {
        return cy.get(this.COMPOSE_TEXT_BUTTON);
    }

    getButton() {
        return cy.get(this.BUTTON);
    }

    getButtonCompose() {
        return cy.get(this.BUTTON_COMPOSE);
    }

    getSearchBox() {
        return cy.get(this.SEARCH_BOX);
    }

    getSubmit() {
        return cy.get(this.SUBMIT);
    }

    getToolTip() {
        return cy.get(this.TOOLTIP);
    }

    getPreciseButton() {
        return cy.get(this.PRECISE_BUTTON);
    }

    getCreativeButton() {
        return cy.get(this.CREATIVE_BUTTON);
    }

    getBalancedButton() {
        return cy.get(this.BALANCED_BUTTON);
    }

    getCopilotGPTs() {
        return cy.get(this.COPILOT_GPT);
    }

    getTitleGPTCopilot() {
        return cy.get(this.TITLE_GPT_COPILOT);
    }

    getTitleGPT() {
        return cy.get(this.TITLE_GPT);
    }

    getTargetLink() {
        return cy.get(this.TARGET_LINK);
    }

    getCopilotProButton() {
        return cy.get(this.COPILOT_PRO_BUTTON);
    }
}

export default Copilot;

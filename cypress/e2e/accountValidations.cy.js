describe('Validations', () => {

  beforeEach(() => {
    cy.visit("https://www.zenithbank.com/");
})

  it('validate Features of the Individual Current Account', () => {
    cy.fixture('locs.json').then((loc) =>{
      cy.get(loc.continueBtn).should('be.visible').click()
        .get(loc.personal).realHover('mouse')
        .get(loc.currentAccts).click()
        .get(loc.personalOpts).then($element => {
          $element.css('display', 'none')
        })
        .get(loc.featuresNBenefits).scrollIntoView().click()
        .get(loc.feat_Benefits_1).should('have.text', 'Zero account opening balance')
        .get(loc.feat_Benefits_2).should('have.text', 'Internet Banking')
        .get(loc.feat_Benefits_3).should('have.text', 'Zenith Mobile Banking app')
        .get(loc.feat_Benefits_4).should('have.text', '*966# Eazybanking')
        .get(loc.feat_Benefits_5).should('have.text', 'MasterCard/Visa/Verve debit card')
        .get(loc.feat_Benefits_6).should('have.text', 'Email/SMS Alertz')
        .get(loc.feat_Benefits_7).should('have.text', 'Cheque book')
    })
  })

  it('validate Requirements of the Individual Current Account', () => {
    cy.fixture('locs.json').then((loc) =>{
      cy.get(loc.continueBtn).should('be.visible').click()
        .get(loc.personal).realHover('mouse')
        .get(loc.currentAccts).click()
        .get(loc.personalOpts).then($element => {
          $element.css('display', 'none')
        })
        .get(loc.requirements).scrollIntoView().click()
        .get(loc.requirement_1).should('have.text', 'Account opening form duly completed')
        .get(loc.requirement_2).should('have.text', 'One recent clear passport photograph of signatory')
        .get(loc.requirement_3).should('have.text', 'Identification of signatories (Driver’s License, International Passport, National Identity Card or Voter’s Card)')
        .get(loc.requirement_4).should('have.text', 'Residence permit (where applicable)')
        .get(loc.requirement_5).should('have.text', 'Two independent and satisfactory references')
        .get(loc.requirement_6).should('have.text', 'Public Utility Receipt dated within the last three months (PHCN bill, water rate bill, tenement rate, rent receipt, telephone bill)')
    })
  })

  it('validate Available Channels of the Individual Current Account', () => {
    cy.fixture('locs.json').then((loc) =>{
      cy.get(loc.continueBtn).should('be.visible').click()
        .get(loc.personal).realHover('mouse')
        .get(loc.currentAccts).click()
        .get(loc.personalOpts).then($element => {
          $element.css('display', 'none')
        })
        .get(loc.channels).scrollIntoView().click()
        .get(loc.channel_1).should('have.text', '*966# EazyBanking')
        .get(loc.channel_2).should('have.text', 'Zenith Internet Banking')
        .get(loc.channel_3).should('have.text', 'In-branch at any Zenith Bank branch')
        .get(loc.channel_4).should('have.text', 'ZenithDirect – our 24/7 telephone banking')
        .get(loc.channel_5).should('have.text', 'Zenith Bank ATM nation-wide – free cash withdrawal')
        .get(loc.channel_6).should('have.text', 'Zenith Mobile Banking App – 24/7 on your smart phone')
        .get(loc.channel_7).should('have.text', 'Access your account using your Zenith Bank debit card at participating merchant stores for payment of goods and services in Nigeria and anywhere in the world')
    })
  })
})
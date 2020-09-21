import { SurveyFormPage } from './surveyform.po';
import { browser, logging } from 'protractor';

describe('Survey Form Page', () => {
  let homePage: SurveyFormPage;

  beforeEach(() => {
    homePage = new SurveyFormPage();
    homePage.navigateTo();
  });

  it('should display the page title', () => {    
    expect(homePage.getTitleCard()).toEqual('Please fill the survey');
  })

  it('should submit the survey info', () => {
    homePage.getfoodNameField().sendKeys('Oats');
    homePage.getlocationField().sendKeys('Halifax park');
    homePage.getTotalNosField().sendKeys(20);
    homePage.getAmountFedField().sendKeys('One bag full');
    homePage.getTimeField().sendKeys('Afternoon');
    homePage.getButtonField().click();
    expect(homePage.getToasterField()).toBeTruthy();
    expect(homePage.getToastTitle().getText()).toEqual('Thank you!');
    expect(homePage.getToastMessage().getText()).toMatch('Your survey is valuable for us!');
  })

  it('should display required validation message', () => {
    homePage.getfoodNameField().click();
    homePage.getlocationField().sendKeys('Park');
    expect(homePage. getfoodNameValidationMessage()).toEqual('This field is required.');
  })

  it('should display "Numbers only" validation message', () => {
    homePage.getTotalNosField().sendKeys('Testing');
    homePage.getfoodNameField().click();
    expect(homePage.getTotalNosValidationMessage()).toEqual('Please enter in numbers');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});

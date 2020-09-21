import { browser, by, element, ElementFinder, promise } from 'protractor';

export class SurveyFormPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }

  navigateToReportPage() {
    return browser.get('/report') as Promise<any>;
  }

  getmainContainer() : ElementFinder {
    return element(by.css('main-container'));
  }

  getTitleCard()  : promise.Promise<string> {
    return element(by.id('title-card')).getText();
  }

  getfoodNameField() : ElementFinder {
    return element(by.name('foodName'));
  }

  getlocationField(): ElementFinder {
    return element(by.name('location'));
  }

  getTotalNosField() : ElementFinder {
    return element(by.name('totalNoOfDucks'));
  }

  getAmountFedField() : ElementFinder {
    return element(by.name('amountFed'));
  }

  getTimeField() : ElementFinder {
    return element(by.name('feedingTime'));
  }

  getButtonField() : ElementFinder {
    return element(by.buttonText('Submit'));
  }

  getToasterField(): ElementFinder {
    return element(by.id('toast-container'));
  }

  getToastTitle(): ElementFinder {
    return this.getToasterField().element(by.css('.toast-title'));
  }

  getToastMessage(): ElementFinder {
    return this.getToasterField().element(by.css('.toast-message'));
  }

  getFoodNameValidationField() : ElementFinder {
    return element(by.name('foodNameValidation'));
  }

  getfoodNameValidationMessage() : promise.Promise<string> {
    return this.getFoodNameValidationField().element(by.tagName('span')).getText();
  }

  getTotalNosValidationField(): ElementFinder {
    return element(by.name('totalNoOfDucksValidation'));
  }

  getTotalNosValidationMessage(): promise.Promise<string> {
    return this.getTotalNosValidationField().element(by.tagName('span')).getText();
  }





}

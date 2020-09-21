import { browser, by, element, ElementFinder, promise } from 'protractor';

export class SurveyReportPage {
    navigateToReportPage() {
        return browser.get('/report') as Promise<any>;
      }   

    getReportTitleCard(): promise.Promise<string> {
        return element(by.id('title-card')).getText();
    }

    getTable(): ElementFinder {
        return element(by.css('table-responsive'));
    }

    getTableRows(): ElementFinder{
        return this.getTable().element(by.name('report'));
    }

      
  }
  

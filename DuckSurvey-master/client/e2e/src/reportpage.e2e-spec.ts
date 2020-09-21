import { SurveyReportPage } from './reportpage.po';
import { browser, logging } from 'protractor';

describe('Survey Report Page', () => {
    let reportPage: SurveyReportPage;    
  
    beforeEach(() => {
        reportPage = new SurveyReportPage();
        reportPage.navigateToReportPage();
    });

    it('should display a Title', () => {        
        expect(reportPage.getReportTitleCard()).toEqual('Survey Report');
    })

    it('Should display the survey report', () => {        
        expect(reportPage.getTableRows()).toBeTruthy();
    })
  
    
  
    afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      }));
    });
  });
  
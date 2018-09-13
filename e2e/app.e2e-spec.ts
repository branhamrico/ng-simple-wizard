import { NgSimpleWizardPage } from './app.po';

describe('ng-simple-wizard App', () => {
  let page: NgSimpleWizardPage;

  beforeEach(() => {
    page = new NgSimpleWizardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { PractPage } from './app.po';

describe('pract App', () => {
  let page: PractPage;

  beforeEach(() => {
    page = new PractPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

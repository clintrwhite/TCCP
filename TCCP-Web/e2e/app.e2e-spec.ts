import { TCCPWebPage } from './app.po';

describe('tccp-web App', () => {
  let page: TCCPWebPage;

  beforeEach(() => {
    page = new TCCPWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

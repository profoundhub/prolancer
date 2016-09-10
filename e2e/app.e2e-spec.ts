import { ProlancerPage } from './app.po';

describe('prolancer App', function() {
  let page: ProlancerPage;

  beforeEach(() => {
    page = new ProlancerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

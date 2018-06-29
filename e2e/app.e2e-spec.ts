import { MyfirstangularPage } from './app.po';

describe('myfirstangular App', function() {
  let page: MyfirstangularPage;

  beforeEach(() => {
    page = new MyfirstangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

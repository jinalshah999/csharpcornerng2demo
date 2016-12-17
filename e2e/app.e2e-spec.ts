import { CsharpcornerPage } from './app.po';

describe('csharpcorner App', function() {
  let page: CsharpcornerPage;

  beforeEach(() => {
    page = new CsharpcornerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

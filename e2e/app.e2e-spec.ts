import { RmFePage } from './app.po';

describe('rm-fe App', () => {
  let page: RmFePage;

  beforeEach(() => {
    page = new RmFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

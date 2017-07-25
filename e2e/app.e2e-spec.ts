import { BinaryConverterPage } from './app.po';

describe('binary-converter App', () => {
  let page: BinaryConverterPage;

  beforeEach(() => {
    page = new BinaryConverterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

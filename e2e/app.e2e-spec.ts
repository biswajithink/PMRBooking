import { PMRBookingPage } from './app.po';

describe('pmrbooking App', function() {
  let page: PMRBookingPage;

  beforeEach(() => {
    page = new PMRBookingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

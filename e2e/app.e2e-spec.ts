import { BasicCoursePage } from './app.po';

describe('basic-course App', () => {
  let page: BasicCoursePage;

  beforeEach(() => {
    page = new BasicCoursePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

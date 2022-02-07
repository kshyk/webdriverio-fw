export default class Page {
  async open(path: string): Promise<void> {
    await browser.url(`https://the-internet.herokuapp.com/${path}`);
  }

  async getRootText(): Promise<string> {
    return await $("body").getText();
  }
}

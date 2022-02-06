import { ChainablePromiseElement } from "webdriverio";

class HomePage {
  get breadButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(".click-crumb");
  }
  get thanks(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $("section#thanks");
  }

  async open(): Promise<void> {
    await browser.url("http://www.okruszek.org.pl/");
    return;
  }

  async clickBread(): Promise<void> {
    await this.breadButton.click();
    return;
  }
}

export default new HomePage();

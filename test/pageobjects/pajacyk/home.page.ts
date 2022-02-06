import { ChainablePromiseElement } from "webdriverio";

class HomePage {
  get bellyButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(".pajacyk__clickbox");
  }
  get thanks(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(".pajacyk__thankyou");
  }

  async open(): Promise<void> {
    await browser.url("https://www.pajacyk.pl/#index");
    return;
  }

  async clickBelly(): Promise<void> {
    await this.bellyButton.click();
    return;
  }
}

export default new HomePage();

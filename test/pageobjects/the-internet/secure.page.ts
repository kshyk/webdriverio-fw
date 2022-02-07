import { ChainablePromiseElement } from "webdriverio";
import Page from "./page";

class SecurePage extends Page {
  get flashAlert(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $("#flash");
  }
}

export default new SecurePage();

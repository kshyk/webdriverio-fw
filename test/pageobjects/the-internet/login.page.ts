import { ChainablePromiseElement } from "webdriverio";
import Page from "./page";

class LoginPage extends Page {
  get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $("#username");
  }
  get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $("#password");
  }
  get submitButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('button[type="submit"]');
  }

  async login(username: string, password: string): Promise<void> {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.submitButton.click();
    return;
  }

  async open(): Promise<void> {
    await super.open("login");
    return;
  }
}

export default new LoginPage();

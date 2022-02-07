import LoginPage from "../../pageobjects/the-internet/login.page";
import SecurePage from "../../pageobjects/the-internet/secure.page";

describe("The Internet", () => {
  it("should enter with basic authentication", async () => {
    await browser.url("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await expect($("#content")).toHaveTextContaining("Congratulations!");
  });

  it("should enter with digest authentication", async () => {
    await browser.url("https://admin:admin@the-internet.herokuapp.com/digest_auth");
    await expect($("#content")).toHaveTextContaining("Congratulations!");
  });

  it("should login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining("You logged into a secure area!");
  });
});

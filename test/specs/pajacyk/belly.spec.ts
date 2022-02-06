import HomePage from "../../pageobjects/pajacyk/home.page";

describe("Pajacyk", () => {
  it("belly click should donate kids", async () => {
    await HomePage.open();
    await HomePage.clickBelly();
    await expect(HomePage.thanks).toBeDisplayed();
  });
});

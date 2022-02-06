import HomePage from '../../pageobjects/okruszek/home.page';

describe("Okruszek", () => {
    it("bread click should donate people", async () => {
        await HomePage.open();
        await HomePage.clickBread();
        await expect(HomePage.thanks).toBeDisplayed();
    });
});
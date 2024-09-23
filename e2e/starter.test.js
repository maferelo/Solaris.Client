describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });

    await device.openURL({
      url: `exp+my-app://expo-development-client/?url=${encodeURIComponent(
        `http://localhost:8081`,
      )}&disableOnboarding=1`,
    });
  });

  it("should have home screen", async () => {
    await waitFor(element(by.id("home"))).toBeVisible();
  });

  it("should redirect to send code screen", async () => {
    await element(by.id("start-button")).atIndex(0).tap();
    await waitFor(element(by.id("send-code-form")).atIndex(0)).toBeVisible();
  });

  it("should allow to send code", async () => {
    await waitFor(element(by.id("phone-input")).atIndex(0)).toBeVisible();
    await element(by.id("phone-input")).atIndex(0).typeText("3017839876");
    await element(by.id("code-input")).atIndex(0).typeText("1234");
  });
});

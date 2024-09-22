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

  it("should redirect to details screen", async () => {
    await element(by.id("details")).atIndex(0).tap();
    await waitFor(element(by.id("details")).atIndex(0)).toBeVisible();
  });
});

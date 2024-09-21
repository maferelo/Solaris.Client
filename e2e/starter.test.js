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
});

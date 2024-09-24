/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: "jest",
      config: "e2e/jest.config.js",
    },
  },
  artifacts: {
    plugins: {
      screenshot: {
        enabled: true,
        shouldTakeAutomaticSnapshots: false,
        keepOnlyFailedTestsArtifacts: false,
        takeWhen: {
          testStart: true,
          testDone: true,
          appNotReady: true,
        },
      },
    },
  },
  apps: {
    "ios.debug": {
      type: "ios.app",
      binaryPath: "myapp.app",
    },
  },
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone SE (3rd generation)",
        os: "iOS 17.5",
      },
    },
  },
  configurations: {
    "ios.sim.debug": {
      device: "simulator",
      app: "ios.debug",
    },
  },
};

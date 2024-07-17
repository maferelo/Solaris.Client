module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      storybookEnabled: process.env.STORYBOOK_ENABLED || "false",
    },
    plugins: ["expo-secure-store"],
  };
};

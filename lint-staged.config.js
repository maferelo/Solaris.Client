module.exports = {
  "*.{js,ts,tsx}": [
    "npx eslint",
    "bash -c 'npm run type:check'",
    "npm run format:check",
  ],
};

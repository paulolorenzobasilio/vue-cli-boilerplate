module.exports = {
  "src/**/*.(js|jsx|vue)|tests/**/*.(spec.js|test.js)": [
    "npm run lint",
    "git add"
  ],
  "src/**/*.vue": filenames =>
    filenames.map(
      filename =>
        `npm run test:unit --bail --findRelatedTests ${
          // get the root filename to able to test related vue files
          filename
            .split(/[/ ]+/)
            .pop()
            .split(".")[0]
        }`
    ),
  "src/assets/**/*.css": ["npm run stylelint -- --fix", "git add"],
  "*.config.js": ["npm run prettier -- --write", "git add"]
};

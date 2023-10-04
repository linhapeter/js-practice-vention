module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js"],
  testMatch: ["<rootDir>/tests/**/*.test.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};

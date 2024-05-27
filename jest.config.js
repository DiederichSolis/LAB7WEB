module.exports = {
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

    transform: {
        "^.+\\.tsx?$": "babel-jest"
      }
      
  };
  
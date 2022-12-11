export default  {
  "testEnvironment" : "jsdom",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "moduleDirectories": [
    __dirname,
    "src",
    "node_modules"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/src/test/setupTests.ts"
  ],
  "moduleNameMapper" : {
    "@/(.*)" : "<rootDir>/src/$1"
  }
};
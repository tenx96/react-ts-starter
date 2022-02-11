export default  {
  "testEnvironment" : "jsdom",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "roots" : ["./src"],
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
  ]
};
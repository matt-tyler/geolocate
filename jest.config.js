const AwsSamPlugin = require("aws-sam-webpack-plugin");

const handlers = Object.values(new AwsSamPlugin().entry());

module.exports = {
    globals: {},
    testEnvironment: "node",
    testRegex: "/tests/.*\.(test|integration|accept)\.(ts|tsx)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    coverageDirectory: "./.cover",
    collectCoverageFrom: [
        "<rootDir>/src/**/*.(ts)",
        "!<rootDir>/src/**/index.ts"
    ],
    coverageThreshold: {
    }
};
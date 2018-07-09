module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "mocha": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "for-direction": "error",
        "getter-return": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error",
            { "allow": ["warn", "error"] }
        ],
        "valid-jsdoc": ["error", { "prefer": { "arg": "param", "argument": "param", "class": "constructor", "return": "returns", "virtual": "abstract" } }],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "react/no-deprecated":"1",
        "semi":"1",
        "no-unused-vars":"1"
    }
};
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersions: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimantalObjectRestSpread: true
    }
  },
  "rules": {
    "array-bracket-spacing": "error",
    "array-callback-return": "error",
    "block-spacing": "error",
    "brace-style": ["error", "1tbs"],
    "camelcase": ["error", {properties: "never"}],
    "comma-spacing": ["error", {before: false, after: true}],
    "comma-style": [2, "last"],
    "computed-property-spacing": "error",
    "default-case": "warn",
    "eol-last": "error",
    "indent": ["error", 2, {"SwitchCase": 1}],
    "key-spacing": ["error", {beforeColon: false, afterColon: true}],
    "linebreak-style": ["error", "unix"],
    "new-cap": ["error", {newIsCap: true}],
    "no-unused-vars": ["error", {"args": "none"}],
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
  }
};

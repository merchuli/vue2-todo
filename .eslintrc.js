module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    "indent": ["error", "tab", {
        "SwitchCase": 1,
        "flatTernaryExpressions": false
    }],
    "no-tabs": "off",
    "object-curly-spacing": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "function-paren-newline": "off",
    "comma-dangle": ["error", "always-multiline"],
    "no-param-reassign": ["error", {"props": false}],
    "max-len": ["error", {"code": 180}],
    "operator-linebreak": ["error", "after"],
    "no-underscore-dangle": ["error", {"allow": ["__INIT_STATE__"]}],
    "import/prefer-default-export": "off",
    "vue/html-indent": ["error", "tab", {
        "attribute": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
    }],
    "vue/html-closing-bracket-spacing": ["error", {
        "selfClosingTag": "always"
    }],
  },
};

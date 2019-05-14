module.exports = {
    "parser": "babel-eslint",
  "rules": {
    "strict": 0
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-dangle": [
            "warn",
            "never"
          ],
          "indent": [
            "warn",
            2
          ],
          "linebreak-style": [
            "warn",
            "unix"
          ],
          "quotes": [
            "error",
            "single"
          ],
          "semi": [
            "error",
            "always"
          ],
          /* Advanced Rules*/
          "no-unused-expressions": "warn",
          "no-useless-concat": "warn",
          "block-scoped-var": "error",
          "consistent-return": "error"
      }
    };
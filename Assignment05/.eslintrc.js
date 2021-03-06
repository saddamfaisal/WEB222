
/** Name:           SADDAM FAISAL
 Student Number: 118406198
 Email:          sfaisal6@myseneca.ca */
/** Add any JavaScript you need to this file. */

module.exports = {
  env: {
    browser: true
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    /* Prefer === to == and !== to !=, but only warn */
    eqeqeq: "warn",
    /* Prefer ; use, but only warn (prettier will fix) */
    semi: "warn",
    /* Allow console.*() */
    "no-console": "off",
    /* Allow debugger; */
    "no-debugger": "off",
    /* Warn when using blocking alert, prompt, etc, but allow */
    "no-alert": "warn",
    /* Warn when using an unnecessary } else { after a return */
    "no-else-return": "warn",
    /* Ignore variables not declared at top of scope */
    "vars-on-top": "off",
    /* Don't bother checking linebreaks, prettier will fix */
    "linebreak-style": "off"
  }
};

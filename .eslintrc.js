module.exports = {
    root: true,
    env: {
        node: true
    },
    parser: 'vue-eslint-parser',
    extends: [
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    // required to lint *.vue files
    plugins: [
        "vue",
        "@typescript-eslint"
    ],
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2022,
        sourceType: "module"
    },
    rules: {}
};

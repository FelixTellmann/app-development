module.exports = {
  extends: [
    "./node_modules/fx-style/",
    "plugin:shopify/polaris",
    "plugin:shopify/jest",
    "plugin:shopify/webpack",
    "next/core-web-vitals",
  ],
  rules: {
    "import/no-unresolved": "off",
    "sort-keys-fix/sort-keys-fix": 0,
  },
  overrides: [
    {
      files: ["*.test.*"],
      rules: {
        "shopify/jsx-no-hardcoded-content": "off",
      },
    },
  ],
  env: {
    browser: true,
  },
  ignorePatterns: ["public/**/*", "*.md", "*.mdx"],
  plugins: ["sort-keys-fix"],
};

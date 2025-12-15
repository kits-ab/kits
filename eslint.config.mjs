import eslint from "@eslint/js"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsparser from "@typescript-eslint/parser"
import importPlugin from "eslint-plugin-import"
import reactHooks from "eslint-plugin-react-hooks"
import globals from "globals"

export default [
  eslint.configs.recommended,
  {
    ignores: ["node_modules/**", "public/**", ".cache/**", "gatsby-types.ts", "src/cms/**"]
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
      "react-hooks": reactHooks
    },
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",

      // Import rules
      "import/newline-after-import": "error",
      "import/no-anonymous-default-export": "off",
      "import/order": [
        "error",
        {
          alphabetize: {
            caseInsensitive: true,
            order: "asc"
          },
          groups: [["builtin", "external"], ["internal", "parent", "sibling", "index"]],
          "newlines-between": "always"
        }
      ],

      // React hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // General rules
      "no-console": "warn",
      "no-unused-vars": "off" // Use @typescript-eslint version instead
    }
  }
]

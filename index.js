module.exports = {
	parserOptions: {
        sourceType: "module",
		ecmaVersion: 10, // 2019|10|6
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true
		}
    },
    extends:[],
    parser: "",
    plugins: [],
	env: {
		es6: true
	},
	rules: {
		"getter-return": "error",
		"no-dupe-args": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "error",
		"no-func-assign": "error",
		"no-redeclare": "error",
		"no-self-assign": "error",
		"no-unused-vars": "warn",
		"no-self-compare": "warn",
		"no-multi-spaces": "warn",
		"no-multi-str": "warn",
		"no-global-assign": "warn",
		"no-unreachable": "warn",
		"no-extra-parens": "warn",
		"no-extra-semi": "warn",
		"semi": ["warn", "always"],
		"curly": "warn",
		"func-call-spacing": ["error", "never"],
		"eol-last": ["warn", "never"],
		"indent": ["warn", "tab"],
		"key-spacing": ["warn", { "beforeColon": false }],
		"keyword-spacing": ["warn", { "before": true }],
		"new-cap": ["error", { "newIsCap": true }],
		"no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
		"no-trailing-spaces": "warn",
		"no-whitespace-before-property": "warn",
		"semi-style": ["error", "last"],
		"space-before-function-paren": "warn",
		"space-infix-ops": "warn",
		"spaced-comment": ["warn", "always"],
		"arrow-spacing": "warn",
		"no-const-assign": "error",
		"no-var": "warn",
        "prefer-const": "warn",
        "typescript/rule-name": "error"
	},
	globals: {
		"YPP": true,
	}
};
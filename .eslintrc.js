module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ]
}

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true
//   },
//   parserOptions: {},
//   extends: [
//     '@nuxtjs/eslint-config-typescript',
//     'prettier',
//     'prettier/vue',
//     'plugin:prettier/recommended',
//     'plugin:nuxt/recommended'
//   ],
//   plugins: ['prettier'],
//   // add your custom rules here
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'vue/html-self-closing': [
//       'error',
//       {
//         html: {
//           void: 'any'
//         }
//       }
//     ],
//     semi: [2, 'never'],
//     'no-console': 'off',
//     'vue/max-attributes-per-line': 'off',
//     'prettier/prettier': [
//       'error',
//       {
//         semi: false,
//         singleQuote: true,
//         parser: 'typescript'
//       }
//     ]
//   }
// }
